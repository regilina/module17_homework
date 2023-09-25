function countDown (n) {
  const countdownArray = []

  for (let i = n; i >= 1; --i) {
    countdownArray.push(i)
  }

  return countdownArray
}

module.exports = countDown
