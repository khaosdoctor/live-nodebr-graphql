const {MongoClient, ObjectId} = require('mongodb')
const MONGODB_URI = 'mongodb://0.0.0.0:64193'

async function fetchAll (name, id) {
  const filter = {}
  if (name) filter.name = name
  if (id) filter._id = new ObjectId(id)

  const client = await MongoClient.connect(MONGODB_URI)
  return client.db('graphql').collection('publishers').find(filter).toArray()
}

module.exports = { fetchAll }
