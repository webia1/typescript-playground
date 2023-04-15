const planets = [
  { id: 1, name: 'Merkur' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 2, name: 'Venus' }, // duplicate ID
  { id: 4, name: 'Mars' },
];

const uniquePlanetsMap = new Map();

/**
 * Usage: someMap.set(key, value)
 */

planets.forEach((planet) => {
  /**
   * Very important: The key of the map must be a unique value.
   * That means: We use the 'id' of the planet as key.
   * Map.set() will overwrite the value if the key already exists.
   */

  uniquePlanetsMap.set(planet.id, planet);
});

console.log(uniquePlanetsMap.size); // 4, since the duplicate was removed
console.log(uniquePlanetsMap.has(2)); // true

const merkur = uniquePlanetsMap.get(1);
console.log(merkur); // { id: 1, name: 'Merkur' }

console.log(uniquePlanetsMap);

/* Output:
Map(4) {
  1 => { id: 1, name: 'Merkur' },
  2 => { id: 2, name: 'Venus' },
  3 => { id: 3, name: 'Earth' },
  4 => { id: 4, name: 'Mars' }
}
*/

console.log(Array.from(uniquePlanetsMap));

/* Output:
[
  [ 1, { id: 1, name: 'Merkur' } ],
  [ 2, { id: 2, name: 'Venus' } ],
  [ 3, { id: 3, name: 'Earth' } ],
  [ 4, { id: 4, name: 'Mars' } ]
]
*/

console.log(Array.from(uniquePlanetsMap.values()));

/* Output:
[
  { id: 1, name: 'Merkur' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' }
]
*/

uniquePlanetsMap.set(5, { id: 5, name: 'Jupiter' });

/**
 * ATTENTION: The first parameter key has to be equal
 * to the 'id' of the Object(=Value).
 * If you use a different value:
 * - the Map will not be updated or
 * - the Map will have doubled entries
 */

console.log(uniquePlanetsMap);
