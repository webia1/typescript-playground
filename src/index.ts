function doSomething(): Promise<string> {
  return Promise.resolve('I do something');
}

function successCallback(something: string) {
  return something;
}

function failureCallback(error: Error) {
  return error;
}

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

promise2.then((some) => console.log(some)); // I do something
