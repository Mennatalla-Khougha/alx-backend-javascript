import fs from 'fs';
import util from 'util';

const rl = util.promisify(fs.readFile);

async function readDatabase(file) {
  try {
    const data = await rl(file, 'utf-8');
    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
    const students = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].split(',');
      const name = line[0];
      const subject = line[3];

      if (!students[subject]) {
        students[subject] = [];
      }
      students[subject].push(name);
    }
    return students;
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = readDatabase;
