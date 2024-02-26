const express = require('express');
const fs = require('fs').promises;

/**
 * The function `countStudents` reads a file containing student data, counts the number of students
 *  in each subject, and returns a summary including the total number of students and the count and
 *  names of students in each subject.
 * @param file - The `file` parameter in the `countStudents` function is the file path to a CSV file
 * containing student data. The function reads this file, processes the data to count the number of
 * students in each subject, and returns a formatted string with the student counts per subject.
 * @returns The `countStudents` function returns a Promise that resolves with a string containing
 *  the number of students and the count of students in each subject along with their names.
 */
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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    }).catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
