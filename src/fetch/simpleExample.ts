// First Method
const lukePromise = fetch('https://swapi.dev/api/people/1');
lukePromise
  .then((response: Response) => response.json())
  .then((data: any) => console.log('Data:', data?.name));

// Second Method
async function getHansSolo() {
  let apiResonse = await fetch('https://swapi.dev/api/people/14');
  let data = await apiResonse.json();
  console.log('Data:', data?.name);
}

getHansSolo();

/** Ouput:
 * Data: Han Solo
 * Data: Luke Skywalker
 */
