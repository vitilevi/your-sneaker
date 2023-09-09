import { size } from '../utils/consts';

export const isLargerThenMDSize = (windowSize: number) => windowSize > size.md;

export const getScreenBreakpoint = (windowSize: number) => {
  let result;
  for (const entry of Object.entries(size).reverse()) {
    const [breakpoint, size] = entry;
    if (windowSize > size) {
      result = breakpoint;
      break;
    }
  }
  return result;
};
