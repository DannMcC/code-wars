//
const getCount = (str) => {
  let vowelsCount = 0
  let vowel = ['a', 'e', 'i', 'o', 'u']
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) {
      vowelsCount += 1
    }
  }
  return vowelsCount
}
