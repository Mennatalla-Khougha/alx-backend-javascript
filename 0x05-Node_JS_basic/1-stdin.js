console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    process.stdout.write(`Your name is: ${input}`);
    process.exit(0);
  });
} else {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    process.stdout.write(`Your name is: ${input}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing');
  });
}
