type MyCustomType = `A8${string}`;

function isMyCustomType(value: string): value is MyCustomType {
  const isMyCustomType = /^A8\d{2}$/.test(value);
  return isMyCustomType;
}

const x: Array<MyCustomType> = ['A807', 'A811', 'A800'];

type Only2Letters = `${'A' | 'B'}${string}`;

function isOnly2Letters(value: string): value is Only2Letters {
  const isOnly2Letters = /^(A|B)[A-Z]{1}$/.test(value);
  return isOnly2Letters;
}

const y: Array<Only2Letters> = ['AA', 'AB', 'BA', 'BB', 'CC'];

// type Only2Letters = `${string}`;

// function isOnly2Letters(value: string): value is Only2Letters {
//   const isOnly2Letters = /^(A|B)[A-Z]{1}$/.test(value);
//   return isOnly2Letters;
// }

// const y: Array<Only2Letters> = ['AA', 'AB', 'BA', 'BB', 'CC'];

// const x: Array<MyCustomType> = ['A807', 'A811', 'A800'];

// type Only2Letters = `${string}`;

// function isOnly2Letters(value: string): value is Only2Letters {
//   const isOnly2Letters = /^(A|B)(?!.*[A-Z])[A-Z]$/.test(value);
//   return isOnly2Letters;
// }

// const y: Array<Only2Letters> = ['AA', 'AB', 'BA', 'BB', 'CC'];

// type Only2Letters = `${string}`;

// function isOnly2Letters(value: string): value is Only2Letters {
//   const isOnly2Letters = /^(A|B)[A-Z]{1}$/.test(value);
//   return isOnly2Letters;
// }

// const y: Array<Only2Letters> = ['AA', 'AB', 'BA', 'BB', 'CC'];

// type Only2Letters = `${'A' | 'B'}${string}`;

// function isOnly2Letters(value: string): value is Only2Letters {
//   return /^(A|B)[A-Z]{1}$/.test(value);
// }

// const y: Array<Only2Letters> = ['AA', 'AB', 'BA', 'BB', 'CC'];
