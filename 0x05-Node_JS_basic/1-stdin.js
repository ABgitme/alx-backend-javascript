// Display welcome message and ask for the user's name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Remove any extra whitespace or newline
    process.stdout.write(`Your name is: ${name}\n`);
  });
} else {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Remove any extra whitespace or newline
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
