const testString = 'abba';
const letters: Array<any> = [];
const result: Array<any> = [];
const numbersArray: Array<number> = [];
const resultString: Array<string> = [];

const testStringArray = Array.from(testString); //?

const testStringArrayLength = testStringArray.length;

switch (testStringArrayLength) {
  case 0:
    resultString.push('None');
    break;
  case 1:
    resultString.push(testStringArray[0]);
    break;
  default: {
    testStringArray.forEach((letter: string) => {
      if (letters.includes(letter)) {
        let lastIndex = letters.lastIndexOf(letter); //?
        let num = result[lastIndex][1]; //?
        letters.push(letter);
        result.push([letter, ++num]);
        numbersArray.push(num);
      } else {
        letters.push(letter);
        result.push([letter, 1]);
      }
    });

    numbersArray; //?

    const maxNumber = Math.max(...numbersArray); //?

    result;

    result.forEach((set: Array<any>) => {
      if (set[1] === maxNumber) {
        resultString.push(set[0]);
      }
    }); //?

    console.log(letters);
    console.log(result);
    break;
  }
}
console.log(resultString); //?
console.log(resultString[0]);
