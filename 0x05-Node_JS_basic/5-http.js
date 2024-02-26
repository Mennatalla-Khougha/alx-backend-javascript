const http = require('http');
const fs = require('fs').promises;

async function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8')
      .then((data) => {
        const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
        let students = 0;
        const subjects = {};

        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i];
          const fields = line.split(',');
          const field = fields[3];
          const firstName = fields[0];

          if (!subjects[field]) {
            subjects[field] = { count: 0, names: [] };
          }
          subjects[field].count += 1;
          subjects[field].names.push(firstName);
          students += 1;
        }
        let result = `Number of students: ${students}`;
        Object.keys(subjects).forEach((field) => {
          result = result.concat(`\nNumber of students in ${field}: ${subjects[field].count}. List: ${subjects[field].names.join(', ')}`);
        });
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      }).catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;
