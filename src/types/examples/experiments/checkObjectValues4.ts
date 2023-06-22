import ts from 'typescript';

console.log(ts.version); // outputs the TypeScript version

export interface SomeType {
  notSet: '';
  a2: '103';
  f3: '111';
  x0?: '99';
}

type NonEmptyStringKeys<T> = {
  [K in keyof T]: T[K] extends string
    ? T[K] extends ''
      ? never
      : K
    : never;
}[keyof T];

type SomeObjectProperties = {
  status: 'on' | 'off';
  source?: string;
};

type SomeObjectType = {
  [K in NonEmptyStringKeys<SomeType>]: SomeObjectProperties;
};

// Usage example
const oA: SomeObjectType = {
  '103': {
    status: 'on',
  },
  '99': {
    status: 'off',
    source: 'some source',
  },
};

console.log(oA);
