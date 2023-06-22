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

type SomeObjectProperties = {
  status: 'on' | 'off';
  source?: string;
};

export type SomeObjectType = {
  [key in NonEmptyStringKey<SomeType>]: SomeObjectProperties;
} & {
  [key: string]: never;
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

const oB: SomeObjectType = {
  '103': {
    status: 'on',
  },
  '111': {
    status: 'off',
    source: 'some source',
  },
};

const oC: SomeObjectType = {
  // Invalid: Empty string key not allowed
  '': {
    status: 'on',
  },
  '111': {
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
