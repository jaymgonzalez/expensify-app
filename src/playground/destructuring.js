/* // object distructuring

const person = {
  name: 'Jaime',
  age: 31,
  location: {
    city: 'Mocoa',
    temp: '30'
  }
}

const {name = 'Anonymous', age} = person
console.log(`${name} is ${age}`)

const {city, temp: temperature} = person.location
if (city && temperature) {
console.log(`It's ${temperature} in ${city}`)
}

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName) // default: Self-Published

 */
// array destructuring

const address = ['Francisco Navacerrada 56','Mocoa','Putumayo','28028']
const [, city, state = 'Spain'] = address
console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '$2', '$2.5', '$2.75']
const [coffee,,medium,] = item
console.log(`A medium ${coffee} cost ${medium}`)
