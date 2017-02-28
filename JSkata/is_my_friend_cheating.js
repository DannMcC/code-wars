const removeNb = (n) => {
  let arr = [];
  for (let a = 1; a <= n; a++) {
    let b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) arr.push([a, b])
  }
return arr;
}
