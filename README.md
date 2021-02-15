# use-memorized-value

```bash
yarn add use-memorized-value
```

## Usage

```ts
import { useMemorizedValue } from "use-memorized-value";

const myCustomHook = () => {
  const someObject = useDep();
  return useMemorizedValue(someObject);
};
```
