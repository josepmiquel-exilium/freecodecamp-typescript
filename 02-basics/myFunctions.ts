function addTwo(num: number):number {
    return num + 2 
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, isPaid:boolean) {}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}

addTwo(5)
getUpper('josep')
signUpUser('josep','josepmiquel@exilium.cat',false)
loginUser('josep','josepmiquel@exilium.cat')

const heros = ['thor', 'spiderman', 'ironman']
heros.map((hero):string => {
    return `hero is ${hero}`
})

// void means the function is going to
// return anything
function consoleError(msg:string): void {
    console.log(msg)
}

function handleError(msg:string): never {
    throw new Error(msg)
}

export {}