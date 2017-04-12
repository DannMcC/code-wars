const tribonacci = (sig,n) => {
  if (n <=3) {
    return n >= 3 ? sig : sig.slice(0, n)
  } else {
    n = n -1
    sig.push(sig[sig.length - 1] + sig[sig.length - 2] + sig[sig.length - 3])
    return tribonacci(sig, n)
  }
}
