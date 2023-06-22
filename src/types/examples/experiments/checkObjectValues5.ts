import ts from 'typescript';

console.log(ts.version); // outputs the TypeScript version

export interface CaseAPIVariantIDType {
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

type SupportedFormsValueType = {
  status: 'on' | 'off';
  source?: string;
};

type SomeObjectType = Record<
  Extract<NonEmptyStringKeys<CaseAPIVariantIDType>, string>,
  SupportedFormsValueType
>;

// Usage example
const supportedForms: SomeObjectType = {
  '103': {
    status: 'on',
  },
  '99': {
    status: 'off',
    source: 'some source',
  },
};

console.log('SUPPORTED FORMS: ', supportedForms);
