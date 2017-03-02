const findOdd = (A) => {
  let sorted = A.sort()
  for (let i = 0; i < sorted.length; i += 2) {
    if (sorted[i] != sorted[i + 1]) {
      return sorted[i]
    }
  }
}
