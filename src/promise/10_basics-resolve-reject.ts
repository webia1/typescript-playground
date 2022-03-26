const p1 = Promise.resolve('Michael Jackson');
const p2 = Promise.reject('Michael Mayr');

p1.then((res) => console.log(res)); // Michael Jackson
p2.then(null, (err) => console.log(err)); // Michael Mayr

// Basic construction: promise.then(fulfillment_handler, reject_handler);
