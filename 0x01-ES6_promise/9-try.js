export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction(); // Execute the passed function
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Append the error message if an error is thrown
  }

  queue.push('Guardrail was processed'); // Append the guardrail message in all cases
  return queue;
}
