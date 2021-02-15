import { useRef } from 'react'
import { dequal } from 'dequal'

export const useMemorizedValue = <T>(val: T): T => {
  const valRef = useRef(val)
  if (!dequal(valRef.current, val)) {
    valRef.current = val
  }
  return valRef.current
}

export const useMemoVal = useMemorizedValue