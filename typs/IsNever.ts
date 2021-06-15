// never无法触发正常逻辑判定

// 避免由于never导致逻辑中断,即捕获never，同时让逻辑正常执行

// 改造为数组
// function assertNeverArray<T>(value: T[] extends never[] ? true : false) {}

// 改造为tuple
// function assertNeverTuple<T>(value: [T] extends [never] ? true : false) {}

import { Equal, Expect } from '@type-challenges/utils'

type IsNever<T> = [T] extends [never] ? true : false;


type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]