// First Method
const lukeOne = fetch('https://swapi.dev/api/people/1');
lukeOne
  .then((response: Response) => response.json())
  .then((data: any) => console.log('One:', data?.name));

// Second Method

async function getLukeTwo() {
  let apiResonse = await fetch('https://swapi.dev/api/people/1');
  let data = await apiResonse.json();
  console.log('Two:', data?.name);
}

getLukeTwo();
