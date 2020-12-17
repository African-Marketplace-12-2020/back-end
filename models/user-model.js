const db = require("../database/dbConfig")

// find a user
function find() {
    return db("users")
}


// find user by
function findBy(filter) {
    return db("users").where(filter);
}


//find user by ID
function findById(id){
    return db("users")
    .where({ id })
    .first()
}


// add a new user
async function add(user) {
    const id = await db("users")
    .insert(user, "id")
    return findById
}

// update user
async function update(id, changes) {
await db("users")
.where({ id })
.update(changes)
return findById 
} 

// delete a user
function remove(id) {
    return db("users")
    .where({ id })
    .del()
}