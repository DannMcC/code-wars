function digital_root(n) {
  let newn = n.toString().split('').reduce(function(a, b) {
    return Number(a) + Number(b)})
  return newn.toString().split('').length ===1 ? Number(newn) : digital_root(newn)

}

const digital_root = n => {
  let newn = n.toString().split('').reduce(function(a, b) {
    return Number(a) + Number(b)})
  return newn.toString().split('').length ===1 ? Number(newn) : digital_root(newn)
}
