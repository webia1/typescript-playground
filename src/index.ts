export type BType = `${string}${number}${number}${number}`;

export function isBType(value: string): value is BType {
  return /^A8[012]{1}[0-9]{1}$/g.test(value);
}

export const BTypeArr: Array<BType> = [
  'A800',
  'A803',
  'A813',
  'A814',
  'A823',
  'A833',
];

BTypeArr.forEach((bType) => {
  if (!isBType(bType)) {
    console.warn(`Invalid BType: ${bType}`);
    console.log(`Expected: ${/^A8[012]{1}[0-9]{1}$/g}`);
    console.log(
      `Expected: A8 followed by 0, 1 or 2 followed by any number`,
    );
  }
});
