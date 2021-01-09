const db = require("../database/dbConfig");

function find() {
  return db("items").select("id", "name", "description", "price", "location", "category");
}

function findBy(filter) {
  return db("items").where(filter);
}

function findById(id) {
  return db("items").where({ id }).first();
}

async function add(item) {
  const [id] = await db("items").insert(item);
  return id;
}

async function update(id, changes) {
  await db("items").where({ id }).update(changes);
  return findById(id);
}

function remove(id) {
  return db("items").where({ id }).del();
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove,
};
