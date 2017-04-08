function DNAStrand(dna){
  let p = ['A','T','C','G']
  let arr = dna.split('')
  return arr.map((x)=> p.indexOf(x) % 2 == 0 ? p[p.indexOf(x) + 1] : p[p.indexOf(x) - 1]).join('')
}
