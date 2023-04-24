const s = new String('Hello World');

class myClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  get myName() {
    return this.name;
  }

  getMyName() {
    return this.name;
  }
}

const hans = new myClass('Hans');

console.log(
  'myClass.prototype',
  Object.getOwnPropertyNames(
    Reflect.getPrototypeOf(myClass.prototype),
  ),
);
console.log(
  'myClass',
  Object.getOwnPropertyNames(Reflect.getPrototypeOf(myClass)),
);
console.log(
  'hans',
  Object.getOwnPropertyNames(Reflect.getPrototypeOf(hans)),
);

console.log('hans property names', Object.getOwnPropertyNames(hans));

console.log('Reflect', Object.getOwnPropertyNames(Reflect));
console.log('Reflect', Reflect.isExtensible(hans));
