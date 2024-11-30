import fs from 'fs';
import path from 'path';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const database = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');

        if (!database[field]) {
          database[field] = [];
        }
        database[field].push(firstname);
      });

      resolve(database);
    });
  });
}
