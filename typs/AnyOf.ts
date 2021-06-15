import { Equal, Expect } from "@type-challenges/utils";

// 限定数组类型，然后对整体数组类型进行判定，不用循环
type Falsy = false | 0 | "" | [] | { [key: string]: never };
type AnyOf<T extends readonly any[]> = T extends Falsy[] ? false : true;

type IsFalse<T> = T extends 0 | false | [] | ""
  ? false
  : keyof T extends never
  ? false
  : true;

// 利用[...]实现数组遍历
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? IsFalse<First> extends true
    ? true
    : AnyOf<Rest>
  : false;
/* _____________ Test Cases _____________ */

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];
