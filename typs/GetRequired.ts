
// T extends Record<K, T[K]> 过滤出非必填的
type RequiredKeys<T> = {
    [K in keyof T]-?: T extends Record<K, T[K]> ? K : never
}[keyof T];

type GetRequired<T> = Pick<T, RequiredKeys<T>>;

type GetRequired<
  T,
  U extends Required<T> = Required<T>,
  K extends keyof T = keyof T
> = Pick<T, K extends keyof T ? (T[K] extends U[K] ? K : never) : never>;


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]