const findOutlier =(integers) =>{
  let odd = integers.filter(n => n % 2 !== 0)
  let even = integers.filter(n => n % 2 === 0)
  return odd.length > 1 ? Number(even) : Number(odd)
} 
