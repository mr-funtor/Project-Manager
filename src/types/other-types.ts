export type StateUnion<T> = {
  [K in keyof T]: { [P in K]: T[P] }
}[keyof T];

export type ReplacePickedTyped <T, K extends keyof T, V> = Omit<T, K> & { [P in K] : V };