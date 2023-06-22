export interface SomeType {
  notSet: '';
  a2: '103';
  f3: '111';
  x0?: '99';
}

type NonEmptyStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? (T[K] extends '' ? never : K) : never;
}[keyof T] as string;

type SomeObjectProperties = {
  status: 'on' | 'off';
  source?: string;
};

type SomeObjectType = Record<NonEmptyStringKeys<SomeType>, SomeObjectProperties>;
