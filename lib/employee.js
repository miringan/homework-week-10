class Employee {

    constructor (name, id, email) {
        // Exception error if name feedback is an empty string
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        // name
        this.name = name;

        // Exception error if id feedback is an empty string
        if (typeof id !== 'string' || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non empty string");
        }
        // id
        this.id = id;

        // Exception error if email feedback is an empty string
        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non empty string");
        }
        // email
        this.email = email;
    }

    // Return name property
    getName() {
        return this.name;
    }

    // Return id property
    getId() {
        return this.id;
    }

    // Return email property
    getEmail() {
        return this.email
    }

    // Return role property
    getRole() {
        return 'Employee';
    }

}

// Export to generate.js
module.exports = Employee;