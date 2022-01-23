// Import Employee parent class
const Employee = require("./Employee");

// Extends Employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // From Employee parent class
        super(name, id, email);

        // Exception error if github feedback is an empty string
        if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
            throw new Error("Expected parameter 'Office Number' to be a non empty string");
        }

        // School property
        this.officeNumber = officeNumber;
    }

    // Returns officeNumber property
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Returns role property
    getRole() {
        return 'Manager';
    }
}

// Exports Manager to generate.js
module.exports = Manager;