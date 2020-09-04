# Sanakirju MongoDB

MongoDB implementation of Sanakirju, a Karelian - Finnish dictionary with over 90 000 words. Based on data from Karjalan Kielen Sanakirja.

### Install

`yarn add sanakirju-mongodb`

### Usage

Set up the database:

```javascript
const { toMongoDB } = require('sanakirju-mongodb')

// Your MongoDB config.
const config = {
  url: '', // Your connection string.
  dbName: 'yourDBName', // Created if new.
  collectionName: 'yourCollectionName', // Created if new.
}

// Run only once to create & populate the database.
const res = await toMongoDB(config)
console.log(res)
```

Query the database:

```javascript
const { getCollection } = require('sanakirju-mongodb')

// Your MongoDB config.
const config = {...}

/**
 * Get collection & client instance.
 * You can also do it yourself without Sanakirju.
 */
const { collection, client } = await getCollection(config)

// Any valid MongoDB query.
const wordsStartingWithU = await collection.find({ startsWith: 'u' }).toArray()

console.log(wordsStartingWithU)
```


### Sources.

Words & translations are from [Karjalan Kielen Sanakirja](http://kaino.kotus.fi/cgi-bin/kks/kks_etusivu.cgi) created by [Institute for the Languages of Finland](https://www.kotus.fi/en). The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
