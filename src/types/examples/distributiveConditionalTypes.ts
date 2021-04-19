type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;
//   ^ type StrArrOrNumArr = Array<string> | Array<number>

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrOrNumArr' is no longer a union.
type StrOrNumArr = ToArrayNonDist<string | number>;
//   ^ = type StrOrNumArr = Array<string | number>

// Is there a difference?
type T1 = Array<string> | Array<number>;
type T2 = Array<string | number>;
