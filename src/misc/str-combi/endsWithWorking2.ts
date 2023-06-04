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
): string[] {
  const combinations: string[] = [];
  generateHelper(str, '', length, combinations, startWith, endsWith);
  return combinations;
}

function generateHelper(
  str: string,
  prefix: string,
  length: number,
  combinations: string[],
  startWith: string,
  endsWith: string,
): void {
  if (length === 0) {
    if (
      startsWithFn(prefix, startWith) &&
      endsWithFn(prefix, endsWith)
    ) {
      combinations.push(prefix);
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      generateHelper(
        str,
        prefix + char,
        length - 1,
        combinations,
        startWith,
        endsWith,
      );
    }
  }
}

let str: string = 'erkanabcdefghijklmnoprstuvyz';
let n: number = 6;
let startsWithStr = 'bir';
let endsWithStr = 'i';
let result = generateCombinations(str, n, startsWithStr, endsWithStr);
console.log('Result:', result);
