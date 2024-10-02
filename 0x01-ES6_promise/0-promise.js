export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous behavior
    const success = true; // You can change this to simulate success or failure

    if (success) {
      resolve('Success!'); // If success, resolve the promise
    } else {
      reject(new Error('Failure!')); // If failure, reject the promise with an error
    }
  });
}
