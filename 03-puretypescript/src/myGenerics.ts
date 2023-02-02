const score: Array<number> = [1,2,3,4,5]
const players:Array<string> = ['Josep', 'Tommy']

function identityOne(val:boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any):any {
    return val;
}

// The difference between 'Type' and 'any' its the input arg and the return 
// has to be the same type. Type detects the type.
function identityThree<Type>(val: Type): Type {
    return val
}

// shortcut
function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]):T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    id: number,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: 'cloud.exilium.cat', id: 21321, password: '0000000'});

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCard(products: T) {
        this.cart.push(products)
    }
}