const {MongoClient, ObjectId} = require('mongodb')
const MONGODB_URI = 'mongodb://0.0.0.0:64193'

async function fetchAll (title, id, author) {
  const filter = {}
  if (title) filter.title = title
  if (id) filter._id = new ObjectId(id)
  if (author) filter.author = new ObjectId(author)

  const client = await MongoClient.connect(MONGODB_URI)
  return client.db('graphql').collection('books').aggregate([
    {'$match': filter},
    {'$lookup': {
      from: 'authors',
      localField: 'author',
      foreignField: '_id',
      as: 'author'
    }},
    {'$unwind': '$author'},
    {'$lookup': {
      from: 'publishers',
      localField: 'publisher',
      foreignField: '_id',
      as: 'publisher'
    }},
    {'$unwind': '$publisher'}
  ]).toArray()
}

module.exports = { fetchAll }
