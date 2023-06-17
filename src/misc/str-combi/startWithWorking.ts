function generateCombinations(
  str: string,
  length: number,
  startWith: string,
): string[] {
  let combinations: string[] = [];
  generateHelper(str, '', length, combinations, startWith);
  return combinations;
}

function generateHelper(
  str: string,
  current: string,
  length: number,
  combinations: string[],
  startWith: string,
): void {
  if (current.length === length) {
    combinations.push(current);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let char: string = str[i];
    if (current.includes(char)) {
      continue;
    }
    let next: string = current + char;
    if (
      next.length <= startWith.length &&
      !startsWith(startWith, next)
    ) {
      continue;
    }
    generateHelper(str, next, length, combinations, startWith);
  }
}

function startsWith(str: string, prefix: string): boolean {
  return str.slice(0, prefix.length) === prefix;
}

let str: string = 'erkanbcdfghijklmopqstuvyzbuelbuel';
let n: number = 5;
let startWith: string = 'bey';
if (startWith.length > n) {
  startWith = startWith.slice(0, n);
}
let result: string[] = generateCombinations(str, n, startWith);
console.log(result);
