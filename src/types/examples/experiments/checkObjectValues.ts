export interface SomeType {
  notSet: '';
  a2: '103';
  f3: '111';
  x0?: '99';
}

type NonEmptyStringKey<T> = {
  [K in keyof T]: T[K] extends string
    ? T[K] extends ''
      ? never
      : K
    : never;
}[keyof T];

export interface SomeObjectType {
  [key in NonEmptyStringKey<SomeType>]: {
    status: 'on' | 'off';
    source?: string;
  };
}

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

const oD: SomeObjectType = {
  // Invalid: Key '33' not present in SomeType
  '33': {
    status: 'off',
    source: 'some source',
  },
};
