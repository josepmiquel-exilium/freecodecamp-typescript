// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

let score: string | number = 33

score = true; // error

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let josep: User | Admin = {name: 'josep', id: 334}
josep = {username: 'jm', id: 6969}

function getDbId(id: number | string) {
    // making some API calls
    if(typeof id === 'string') id.toLowerCase()
    if(typeof id === 'number') id + 2
}

getDbId(3)
getDbId("3")

// union in array
const data: (number | string | boolean)[] = [1,2,3,4,'3', true]

// allow only some values to a variable
let seatPosition: "aisle" | "middle" | "window"
seatPosition = 'back' // error because back is not allowed
seatPosition = 'middle' // error because back is not allowed

export {}