// Import Employee parent class
const Employee = require("./Employee");

// Extends Employee parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // From Employee parent class
        super( name, id, email );

        // Exception error if github feedback is an empty string
        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non empty string");
        }

        // School property
        this.school = school;
    }

    // Returns school property
    getSchool() {
        return this.school;
    }

    // Returns role property
    getRole() {
        return 'Intern'
    }
}

// Exports Intern to generate.js
module.exports = Intern;