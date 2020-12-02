import { useRef } from "react";

function useDebounce(fn, ms) {
  const refVar = useRef(null);
  return function () {
    if (refVar) clearTimeout(refVar);
    const args = arguments;

    setTimeout(() => {
      fn.apply(this, args);
    }, ms);

    return this;
  };
}

export default useDebounce;
