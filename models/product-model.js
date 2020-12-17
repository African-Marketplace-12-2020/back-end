const db = require("../database/dbConfig")


// find product

function find() {
    return db("item")
    .select("id", "name", "description", "price")
}


// find By
function findBy(filter) {
    return db("item") 
    .select("id", "name", "description", "price")
    .where(filter)
}

// find a product by id
function findById(id) {
    return db("item")
    .where({ id })
    .first()
}

// add a plant
async function add(item) {
    const [id]= await db("item")
    .insert(item)
    return findById[id]
}

// update an item
async function update(id, changes) {
    await db("item")
    .where({ id })
    .update(changes)
    return findById
}

// delete an item
function remove(id) {
    return db("item")
    .where({ id })
    .del()
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
}

