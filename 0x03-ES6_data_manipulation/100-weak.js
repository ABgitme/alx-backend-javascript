// Exporting a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Exporting the function queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize it with a count of 1
    weakMap.set(endpoint, 1);
  } else {
    // If it exists, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // If the count reaches 5 or more, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
