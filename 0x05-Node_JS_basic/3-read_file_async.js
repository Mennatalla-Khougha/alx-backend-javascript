const fs = require('fs').promises;

function countStudents (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8')
      .then(data => {
        const lines = data.toString().split('\n');
        let students = 0;
        const subjects = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          const fields = line.split(',');
          const field = fields[3];
          const firstName = fields[0];

          if (!subjects[field]) {
            subjects[field] = { count: 0, names: [] };
          }
          subjects[field].count++;
          subjects[field].names.push(firstName);
          students++;
        }
        console.log(`Number of students: ${students}`);
        Object.keys(subjects).forEach(field => {
          console.log(`Number of students in ${field}: ${subjects[field].count}. List: ${subjects[field].names.join(', ')}`);
        });
        resolve();
      })
      .catch(error => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
