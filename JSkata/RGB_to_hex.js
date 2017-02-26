function rgb(r, g, b){
  const hexRange = (x) => {
    if ( x >= 0 && x <=255) {
      return x
    }
    else if (x < 0) {
      return 0
    }
    else {
      return 255
    }
  }
  const zeroCheck = (x) => x == '0' ? '00' : x
  let rHex = zeroCheck(hexRange(r).toString(16).toUpperCase())
  let gHex = zeroCheck(hexRange(g).toString(16).toUpperCase())
  let bHex = zeroCheck(hexRange(b).toString(16).toUpperCase())

  return rHex + gHex +bHex
}
