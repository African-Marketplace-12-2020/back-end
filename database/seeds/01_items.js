exports.seed = async function(knex) {
  await knex("items").insert([
    {name:"Beans", description: "Tasty black beans", price:"5"},
    {name:"Milk", description: "Soy milk is superior", price:"8"},
    {name:"Cheese", description: "Who you cheesin' with", price:"5"},
    {name:"Corn", description: "Not on the cobb", price:"7"},
    {name:"Olives", description: "Colossal stuffed with garlic", price:"11"}
  ])
}
