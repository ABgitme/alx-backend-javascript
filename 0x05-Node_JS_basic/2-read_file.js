const fs = require('fs');

/**
 * Reads a CSV file and logs the number of students and their distribution by field.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ensure there are rows (excluding the header)
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line and process the remaining rows
    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    // Create a mapping of fields to student names
    const fields = {};
    students.forEach(([firstname, , , field]) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (err) {
    // Log the error message and throw a custom error
    throw new Error('Cannot load the database');
  }
}

// Export the function
module.exports = countStudents;
