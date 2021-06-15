import { Equal, Expect } from "@type-challenges/utils";

type Split<T extends string, C extends string = ""> = T extends ""
  ? []
  : T extends `${infer R}${C}${infer L}`
  ? [R, ...Split<L>]
  : [T];
type ArrToUnion<T extends any[]> = T[number];


type KebabCase<
  S,
  P extends string = "",
  C extends string = "-",
  E extends string = "_" | ArrToUnion<Split<"😎">>
> = S extends `${infer R}${infer L}`
  ? P extends ""
    ? R extends C
      ? `${R}${KebabCase<L, R>}`
      : R extends Uppercase<R>
      ? R extends E
        ? `${R}${KebabCase<L, R>}`
        : `${Lowercase<R>}${KebabCase<L, R>}`
      : `${R}${KebabCase<L, R>}`
    : R extends C
    ? `${R}${KebabCase<L, R>}`
    : R extends Uppercase<R>
    ? R extends E
      ? `${R}${KebabCase<L, R>}`
      : `${C}${Lowercase<R>}${KebabCase<L, R>}`
    : `${R}${KebabCase<L, R>}`
  : S;

type x = ArrToUnion<Split<"😎">>;

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];
