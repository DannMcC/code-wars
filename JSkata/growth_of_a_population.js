function nbYear (p0, percent, aug, p) {
  let nPop = p0 + (p0 * (percent / 100)) + aug
  let year = 1
  for (let i = 0; nPop < p; i++) {
    nPop = nPop + (nPop * (percent / 100)) + aug
    year += 1
  }
  return year
}
