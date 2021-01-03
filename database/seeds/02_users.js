const hashedPassword = "$2a$14$ZubTV.NIdE/sILDucdWEsu9dhLNzmDXsgoLa/J0z3iKQqH7.kGaFm"

exports.seed = async function(knex) {
await knex("users").insert([
  {id:3, username:"testuser2", password:hashedPassword}
])
}
