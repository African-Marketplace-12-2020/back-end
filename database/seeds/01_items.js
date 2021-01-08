exports.seed = async function(knex) {
  await knex("items").insert([
    {location: "USA", category:"food", name:"Beans", description: "Tasty black beans", price:"5"},
    {location: "Switzerland", category:"drink",name:"Milk", description: "Soy milk is superior", price:"8"},
    {location: "France", category:"food",name:"Cheese", description: "Who you cheesin' with", price:"5"},
    {location: "USA", category:"food",name:"Corn", description: "Not on the cobb", price:"7"},
    {location: "USA", category:"food",name:"Olives", description: "Colossal stuffed with garlic", price:"11"}
  ])
}
