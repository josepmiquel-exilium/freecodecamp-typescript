"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classes
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Brussels';
        this.id = 1334;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // with a getter we can acces to and return private value
    get getCourseCount() {
        return this._courseCount;
    }
    // with a setter we can acces and change a value of a private instance
    set setCourseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error('Course should be more than 1');
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
const josep = new User('josepmiquel@exilium,cat', 'Josep');
josep.city = 'Anvers'; // error bc is readonly
josep.id; // error bc is private and you cant read it
josep.deleteToken(); // error bc is private and you can only use inside the class
