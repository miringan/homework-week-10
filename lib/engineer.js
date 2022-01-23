// Import Employee parent class
const Employee = require("./Employee");

// Extends Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, github){
        // From Employee
        super(name, id, email);
        
        // Exception error if github feedback is an empty string
        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non empty string");
        }

        // Github username
        this.github = github;
    
    }

    // Return github property
    getGithub() {
        return this.github;
    }

    // Return role property
    getRole() {
        return 'Engineer';
    }

}

// Export Engineer to generate.js
module.exports = Engineer;