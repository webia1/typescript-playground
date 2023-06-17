export type PatternType<T extends string> = `${Extract<
  T,
  string
>}${string}`;

type IsKWithThreeNumbers<T extends string> =
  T extends `K${infer Rest}`
    ? Rest extends `${number}${number}${number}`
      ? true
      : false
    : false;

export type TupleOfPatternStrings<T extends string> =
  T extends `${infer Prefix}${infer Rest}`
    ? IsKWithThreeNumbers<Prefix> extends true
      ? [Prefix, ...TupleOfPatternStrings<Rest>]
      : never
    : [];

export function createTupleOfPatternStrings<T extends string>(
  ...strings: T[]
): Array<T> {
  return strings;
}

// type bType = TupleOfPatternStrings<'K707'>[string];
// type rType = TupleOfPatternStrings<'01'>[string];

const bbType = createTupleOfPatternStrings('K707', 'K734');
const rrType = createTupleOfPatternStrings('01', '02');

export type ExampleType = {
  b: typeof bbType;
  r: typeof rrType;
};

// export const Example: ExampleType = {
//   b: createTupleOfPatternStrings('K707', 'K734'),
//   r: createTupleOfPatternStrings('01', '02'),
// };

export const Example: ExampleType = {
  b: ['K707', 'K734'],
  r: ['01', '02'],
};
