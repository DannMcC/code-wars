const bitsBattle = (numbers) => {
  let oddarr = numbers.filter((x) => x % 2 ===1 )
  let oddbin= oddarr.map((x) => x.toString(2)).join(' ').split('').filter((x) => x === '1')
  let evenarr = numbers.filter((x) => x % 2 ===0 )
  let evenbin= evenarr.map((x) => x.toString(2)).join(' ').split('').filter((x) => x === '0')
  if (evenbin.length > oddbin.length) {
    return 'evens win'
  }
  if (evenbin.length < oddbin.length) {
    return 'odds win'
    console.log(evenbin)
  } else {
    return 'tie'
  }
}
