import ts from 'typescript';
console.log(ts.version);
export interface SomeIDsType {
  empty: '';
  formA: '100';
  formB: '120';
  formC?: '130';
}

export enum SomeSubVariants {
  'EE' = 'e',
  'OO' = 'o',
  'PP' = 'p',
}

/**
 * What we want to achieve is, to
 * create a type for the following object,
 * from existing types or values:

    export const ResultObj = {
      '100': {
        name: 'George Michael',
        subTypes: {
          e: 'yes',
          o: 'no',
          p: 'yes',
        },
      },
      '120': {
        name: 'Michael Jackson',
        subTypes: {
          e: 'yes',
          o: 'no',
          p: 'yes',
        },
      },
    };
 *
 * "130" should be optional.
 */

type YesOrNo = 'yes' | 'no';
type SubTypesType = {
  [key in SomeSubVariants]: YesOrNo;
};

type ResultObjValueType = {
  name: string;
  subTypes: SubTypesType;
};

/**
 * Get the values of the first object
 * as keys of the second object by ignoring
 * the empty string key.
 */

type ValuesOfInterfaceAsKeyType<T> = T[keyof T] extends infer V
  ? V extends string
    ? V extends ''
      ? never
      : V
    : never
  : never;

type AllowedKeys = ValuesOfInterfaceAsKeyType<SomeIDsType>;

/**
 * These are:
 * type AllowedKeys = "100" | "120" | "130"
 */

/**
   * The following approach would not allow as
   * to make the "130" key optional.
     
  export type ResultObjType = {
    [key in AllowedKeys]: ResultObjValueType;
  }; 
  
  * Therfore we need to use the following approach:

    export type ResultObjType = {
    [key in keyof SomeIDsType as SomeIDsType[key] extends AllowedKeys
      ? SomeIDsType[key]
      : never]: ResultObjValueType;
  };

  * Or even better:

    export type ResultObjType = {
    [key in keyof SomeIDsType as SomeIDsType[key] extends AllowedKeys
      ? SomeIDsType[key]
      : never]?: ResultObjValueType;
  };

  * The question mark makes the key optional
  * in the example above.
  * 
  * But the solution, which I like the most is:
  * 
  export type ResultObjType = Record<
AllowedKeys, ResultObjValueType>;

  * But unfortunately, this solution does not
  * allow us to make the "130" key optional neither.
  * 
  * The resulting type is:
  */

export type ResultObjType = {
  [key in keyof SomeIDsType as SomeIDsType[key] extends AllowedKeys
    ? SomeIDsType[key]
    : never]?: ResultObjValueType;
};

export const ResultObj: ResultObjType = {
  '100': {
    name: 'George Michael',
    subTypes: {
      e: 'yes',
      o: 'no',
      p: 'yes',
    },
  },
  '120': {
    name: 'Michael Jackson',
    subTypes: {
      e: 'yes',
      o: 'no',
      p: 'yes',
    },
  },
};

console.log('Result Obj:', ResultObj);
