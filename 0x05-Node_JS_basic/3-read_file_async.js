const fs = require('fs').promises;

function countStudents(file) {
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
        console.log(`Number of students: ${students}`);
        Object.keys(subjects).forEach((field) => {
          console.log(`Number of students in ${field}: ${subjects[field].count}. List: ${subjects[field].names.join(', ')}`);
        });
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
