console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your name is: ${input}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your name is: ${input}`);
    process.exit();
  });
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
