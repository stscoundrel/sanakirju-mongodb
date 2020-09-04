const sanakirju = require('sanakirju')

const getAll = async () => {
  const dictionary = await sanakirju.fromXML()

  const words = dictionary.map(word => formatWord(word))

  return words
}

/**
 * Prepare words for collection.
 * Adds "starts with" for convenience.
 */
const formatWord = (word) => ({
  ...word,
  startsWith: word.word.charAt(0).toLowerCase(),
})

module.exports = {
  getAll,
}
