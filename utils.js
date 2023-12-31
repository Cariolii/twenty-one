const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

const randomNumber = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from
  }

module.exports= {shuffle, randomNumber}