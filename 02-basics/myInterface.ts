// The difference between interface and type is you can re-open the interfacces
// and add new properties

interface User {
    readonly dbId: number // readonly => I can't manipulate it
    email: string,
    userId: number
    googleId?: string, // optional
    // startTrail: () => string // function that returns an string
    startTrail() : string, // function that returns an string (shortcut)
    getCoupon(couponname: string, value: number): number, // function receives prototyped arguments and return number
}

// how to reopen interfaces to add more values
interface User {
    githubToken: string
}

// inheritance
interface Admin extends User {
    role: 'admin' | 'devops' | 'developer'
}

// We could user User interface also but without the prop 'role'.
// we got the prop 'role' from the inheritance.
const josep: Admin = {
    dbId: 1042, 
    role: 'admin',
    githubToken: '1jsj29s',
    email: 'josep@josep.com',
    userId: 22,
    googleId: 'sdasda',
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (couponname: 'josep10', value: 10) => {
        const objPrice = 100
        const discount = (value / objPrice) * 100

        return objPrice - discount
    }
}

josep.email = 'josepmiquel@exilium.cat'
josep.dbId = 33 // error because its readonly

export {}