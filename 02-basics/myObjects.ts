function createUser({name: string, isActive: boolean}){}

// in this way, we can send to the function additional arguments
// without typescript complaining about it
// example: email
let newUser = {name: 'josep', isActive: true, email: "h@h.com"}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: 'react', price: 25}
}

// better way to do the previous things
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUserWithType(user: User){
    return user
}

createUserWithType({name: '', email: '', isActive: true})

// readonly and optional
type OtherUser = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    cardNum?: number // question mark means optional
}

let myUser: OtherUser = {
    _id: "1234",
    name: "josep",
    email: "josepmiquel@exilium.cat",
    isActive: false
}

myUser.email = 'josepito@otro.com'

// this following isn't a good practice but is good to know
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}