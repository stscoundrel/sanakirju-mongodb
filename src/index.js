const sanakirju = require('sanakirju')
const { setupDB, populateDB } = require('./database/setup.js')
const { getCollection } = require('./database/collection.js')

const toMongoDB = async (config) => {
  try {
    const client = await setupDB(config)
    const words = await sanakirju.fromXML()

    await populateDB(client, config, words)

    client.close()

    return { status: true }
  } catch (err) {
    return { status: false, err }
  }
}

module.exports = {
  toMongoDB,
  getCollection,
}
