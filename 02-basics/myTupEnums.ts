let tUser: [string, number, boolean]
tUser = ['hc', 131, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [112, 'example@google.com']

newUser[1] = 'josep@exilium.cat'
newUser.push(true) // error


export {}