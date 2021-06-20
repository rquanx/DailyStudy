
type GetOptional<
T,
U extends Required<T> = Required<T>,
K extends keyof T = keyof T
> = Pick<T, K extends keyof T ? (T[K] extends U[K] ? never : K) : never>;

type x = GetOptional<{ foo: undefined, bar?: undefined }>;
/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]