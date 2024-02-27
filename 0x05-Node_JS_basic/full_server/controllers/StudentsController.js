const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString())
      .then((students) => {
        const data = [];
        data.push('This is the list of our students');
        const lines = Object.keys(students).sort();
        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i];
          data.push(`Number of students in ${line}: ${students[line].length}. List: ${students[line].join(', ')}`);
        }
        res.status(200).send(data.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const subject = req.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(subject in students)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          res.status(200).send(`List: ${students[subject].join(', ')}`);
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
