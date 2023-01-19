// Classes
class User {
    private _courseCount = 1

    readonly city: string = 'Brussels'
    private id: number = 1334

    constructor(public email: string, public name: string) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // with a getter we can acces to and return private value
    get getCourseCount(): number {
        return this._courseCount
    }

    // with a setter we can acces and change a value of a private instance
    set setCourseCount(courseNum: number) {
        if(courseNum <= 1) throw new Error('Course should be more than 1')
        this._courseCount = courseNum

    }

    private deleteToken() {
        console.log("Token deleted")
    }

}

const josep = new User('josepmiquel@exilium,cat', 'Josep')

josep.city = 'Anvers' // error bc is readonly
josep.id // error bc is private and you cant read it

josep.deleteToken() // error bc is private and you can only use inside the class

export {}