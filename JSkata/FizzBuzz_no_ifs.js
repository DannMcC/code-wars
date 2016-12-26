const fizzBuzz = n => {
  return !(n % 3) ? !(n % 5) ? 'Fizz' + 'Buzz' : 'Fizz' : !(n % 5) ? 'Buzz' : n
}
