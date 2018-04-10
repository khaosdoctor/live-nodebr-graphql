const { MongoClient, ObjectId } = require('mongodb')
const MONGODB_URI = 'mongodb://0.0.0.0:64193'

async function handler (root, inputs) {
  if (!inputs.title) throw new Error('O campo title é necessário para inserir um livro')
  if ([null, undefined].includes(inputs.isBrazilian)) throw new Error('É necessário informar se o livro é brasileiro')
  if (!inputs.author) throw new Error('O livro precisa de um autor')
  if (!inputs.publisher) throw new Error('O livro precisa de uma editora')

  let book = {
    isBrazilian: inputs.isBrazilian,
    title: inputs.title,
    page_number: inputs.page_number,
    author: new ObjectId(inputs.author),
    publisher: new ObjectId(inputs.publisher)
  }
  const client = await MongoClient.connect(MONGODB_URI)
  const {ops: result} = await client.db('graphql').collection('books').insert(book)
  return result.shift()
}

module.exports = handler
