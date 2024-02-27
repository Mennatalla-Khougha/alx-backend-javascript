const { readFile } = require('fs');

function readDatabase(file) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i].split(',');
          const name = line[0];
          const subject = line[3];
          if (!students[subject]) {
            students[subject] = [];
          }
          students[subject].push(name);
        }
        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
