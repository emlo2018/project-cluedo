// STEP 1 - OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#42f59b',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const mrMustard = {
  firstName: 'Harold',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He has a big weapon collection',
  age: 35,
  image: 'assets/mustard.png',
  occupation: 'Retired military'
}
const mrsPeacock = {
  firstName: 'Jocelyn',
  lastName: 'Peacock',
  color: 'brown',
  description: 'She is rich...Very rich',
  age: 85,
  image: 'assets/peacock.png',
  occupation: 'Free as the wind'
}
const mrPlum = {
  firstName: 'Jonas',
  lastName: 'Plum',
  color: 'purple',
  description: 'He has a lot of secrets',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Secret'
}
const mrsScarlet = {
  firstName: 'Maya',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She has a dark history',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Kindergarden teacher'
}
const mrsWhite = {
  firstName: 'Charlotte',
  lastName: 'White',
  color: 'white',
  description: 'Has a lot of friends and connections',
  age: 65,
  image: 'assets/white.png',
  occupation: 'News reporter'
}


// CREATED OBJECTS FOR ALL THE WEAPONS, ADDED CHARACTERISTICS TO THE WEAPONS.

const rope = {
  name: 'rope',
  weight: 10,
  hidden: true 
}

const knife = {
  name: 'knife',
  weight: 100,
  hidden: false
}

const poison = {
  name: 'poison',
  weight: 1,
  hidden: true
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const bedroom = 'Bedroom'
const balcony = 'Balcony'
const garden = 'Garden'
const saloon = 'Saloon'

// ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrMustard,
  mrsPeacock,
  mrsScarlet,
  mrPlum
]

const weapons = [
  rope,
  knife,
  poison
]

const rooms = [
  bedroom,
  balcony,
  garden
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer:'',
  weapon:'',
  room:''
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `with the age off ${mystery.killer.age}`
  document.getElementById('killerDescription').innerHTML = `and ${mystery.killer.description}`
  const theKillerImage = document.getElementById("killerImage")
  theKillerImage.src = mystery.killer.image
  document.getElementById(`killerOccupation`).innerHTML = `Occupation: ${mystery.killer.occupation}`

  /*document.getElementById('killerCard').onclick = function () {
    pickKiller()
    document.getElementById('killerImage').innerHTML = `<img src='${mystery.killer.image}'>`
  }*/
}

// pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the weapon name and weight.
  document.getElementById(
    'weaponName'
  ).innerHTML = `weight: ${mystery.weapon.weight} name: ${mystery.weapon.name}`

}

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the room
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

//This will make the cards clickable 
document.getElementById('killerCard').onclick = function () {
  pickKiller()
  document.getElementById('killerImage').innerHTML = `<img src='${mystery.killer.image}'>`
}

document.getElementById('roomCard').onclick = function () {
  pickRoom()
}

document.getElementById('weaponCard').onclick = function () {
  pickWeapon()
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 
// It should show something like: 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {

  
 /* pickKiller()
  pickRoom()
  pickWeapon() */

  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed in the ${mystery.room}, 
  by ${mystery.killer.firstName} with the ${mystery.weapon.name}`

}

document.getElementById('revealation').onclick = revealMystery 
/*
document.getElementById('weaponCard').onclick = function () {
  pickWeapon()
} */

/*document.getElementById('roomCard').onclick = function () {
  pickRoom()
}/*

/*document.getElementById('killerCard').onclick = function () {
    pickKiller()
    document.getElementById('killerImage').innerHTML = `<img src='${mystery.killer.image}'>`
}*/