"use strict";

class Teacher {
    constructor(name, hairColor) {
        this.name = name;
        this.hairColor = hairColor;
    }

    getName = function () {
        return this.name;
    };
    setName = function (name) {
        this.name = name;
    };

    getHairColor = function () {
        return this.hairColor;
    };
    setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };

    toString = function () {
        return `${this.name} has ${this.hairColor}`;
    };
}

let teacher = new Teacher("Petra", "BrownHair");


module.exports = Teacher;

//Helped by Lebogang