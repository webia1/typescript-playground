type GreeterCallbackType = (greetingsFor: string) => void;

function greet(msg: string, callback: GreeterCallbackType) {
  callback(msg);
}

greet('How are you', greetMaxCallback);
greet('How are you', greetJohnCallback);

function greetMaxCallback(msg: string) {
  setTimeout(() => {
    console.log(msg, 'Max');
  }, 300);
}

function greetJohnCallback(msg: string) {
  setTimeout(() => {
    console.log(msg, 'John');
  }, 100);
}

/**
 * Output:
 * How are you John
 * How are you Max
 */
