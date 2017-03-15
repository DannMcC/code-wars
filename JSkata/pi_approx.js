function iterPi(epsilon) {
  let num = 1
  let denom = 3
  let posNeg = -1
  let iterations = 1
  for (let i = 0; Math.abs(4 * num - Math.PI) >= epsilon; iterations +=1) {
    num += posNeg * (1/denom)
    denom += 2
    posNeg *= -1
  }
  return [iterations, parseFloat((4 * num).toFixed(10))]
}
