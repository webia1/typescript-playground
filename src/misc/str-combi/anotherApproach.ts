function startsWithFn(str: string, prefix: string): boolean {
  return str.slice(0, prefix.length) === prefix;
}

function endsWithFn(str: string, suffix: string): boolean {
  return str.slice(-suffix.length) === suffix;
}

function generateCombinations(
  str: string,
  length: number,
  startWith: string,
  endsWith: string,
): Map<string, Set<string>> {
  let combinations: Map<string, Set<string>> = new Map();
  let memo: Map<string, Set<string>> = new Map();
  generateHelper(
    str,
    '',
    length,
    combinations,
    startWith,
    endsWith,
    memo,
  );
  return combinations;
}

function generateHelper(
  str: string,
  prefix: string,
  length: number,
  combinations: Map<string, Set<string>>,
  startWith: string,
  endsWith: string,
  memo: Map<string, Set<string>>,
): void {
  if (length === 0) {
    if (
      startsWithFn(prefix, startWith) &&
      endsWithFn(prefix, endsWith)
    ) {
      combinations.set(prefix, new Set([prefix]));
    }
  } else {
    if (memo?.has(prefix)) {
      memo?.get(prefix)?.forEach((value) => {
        combinations.set(prefix, new Set([value]));
      });
    } else {
      for (let i = 0; i < str.length; i++) {
        generateHelper(
          str,
          prefix + str[i],
          length - 1,
          combinations,
          startWith,
          endsWith,
          memo,
        );
      }
      memo.set(prefix, combinations?.get(prefix) || new Set());
    }
  }
}

let str: string = 'erkanabcdefghijklmnoprstuvyz';
let n: number = 6;
let startsWithStr = 'biri';
let endsWithStr = 'i';
let result = generateCombinations(str, n, startsWithStr, endsWithStr);
console.log('Result: ', result);
