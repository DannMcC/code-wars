const findNextSquare = (sq) => {
  return (Number.isInteger(Math.sqrt(sq)) === true) ? (Math.sqrt(sq) + 1) ** 2 : -1
}
