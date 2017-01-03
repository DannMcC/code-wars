const lineupStudents = (students) => {
  students = students.trim().split(' ')
  students.sort((a, b) => {
    if (a === b) return 0
    if (a.length !== b.length) {
      return b.length - a.length
    } else {
      return b.localeCompare(a)
    }
  })
  return students
}
