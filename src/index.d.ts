type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: Record<string, string>;
    };
  }
}
