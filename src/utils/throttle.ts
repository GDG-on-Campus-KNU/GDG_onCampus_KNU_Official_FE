export function throttle<T extends (...arg: unknown[]) => void>(
  fn: T,
  interval: number = 300
) {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now();

    if (now - last >= interval) {
      last = now;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(
        () => {
          last = Date.now();
          timer = null;
          fn.apply(this, args);
        },
        interval - (now - last)
      );
    }
  } as T;
}
