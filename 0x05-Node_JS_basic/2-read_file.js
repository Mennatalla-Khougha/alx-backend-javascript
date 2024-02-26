const fs = require('fs');

function countStudents(file) {
  let students = 0;
  const subjects = {};
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const lines = data.toString().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const fields = line.toString().split(',');
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
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
