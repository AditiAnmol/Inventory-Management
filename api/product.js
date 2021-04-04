const { getDb, getNextSequence } = require('./db');

async function add(_, { product }) {
  const db = getDb();
  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products').findOne({ _id: result.insertedId });
  return savedProduct;
}

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

module.exports = { add, list };
