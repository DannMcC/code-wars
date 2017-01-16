function sumDigits (number) {
  let arr = Math.abs(number).toString().split('')
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i])
  }
  return total
}
