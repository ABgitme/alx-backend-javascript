export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // Find the grade object for the student in newGrades
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Return a new object with updated grade or "N/A" if not found
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
