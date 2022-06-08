import { useState } from "react";

function useSyncState<T>(initialValue: T) {
  const [trait, updateTrait] = useState<T>(initialValue);

  let current = trait;

  const get = () => current;

  const set = (newValue: any) => {
    current = newValue;
    updateTrait(newValue);
    return current;
  };

  return {
    get,
    set,
  };
}

export { useSyncState };
