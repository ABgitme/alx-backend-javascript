import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase();
      res.status(200).send(`
        This is the list of our students
        ${Object.keys(database)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((field) => {
      const studentsList = database[field].join(', ');
      return `Number of students in ${field}: ${database[field]
        .length}. List: ${studentsList}`;
    })
    .join('\n')}
      `);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase();
      const studentsList = database[major].join(', ');
      res.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
