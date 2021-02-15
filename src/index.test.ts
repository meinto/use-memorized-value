import { useEffect } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useMemorizedValue } from './index'

describe('useMemorizedValue', () => {
  const effectTriggered = jest.fn()

  beforeEach(() => {
    effectTriggered.mockClear()
  })

  test('useMemorizedValue', () => {
    const useTestHook = (props: { hello: string }) => {
      const result = useMemorizedValue(props)
      useEffect(() => effectTriggered(), [result])
      return result
    }
    const { result, rerender } = renderHook((props) => useTestHook(props), {
      initialProps: { hello: 'world' }
    })
    expect(effectTriggered).toHaveBeenCalledTimes(1)
    expect(result.current).toEqual({ hello: 'world' })
    rerender({ hello: 'world' })
    expect(effectTriggered).toHaveBeenCalledTimes(1)
    expect(result.current).toEqual({ hello: 'world' })
    rerender({ hello: 'world 2' })
    expect(effectTriggered).toHaveBeenCalledTimes(2)
    expect(result.current).toEqual({ hello: 'world 2' })
  })
})