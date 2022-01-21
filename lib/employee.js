class Employee {

    constructor (name, id, email) {
        
        // name
        this.name = name;

        // id
        this.id = id;

        // email
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return `'Employee'`;
    }

}

module.exports = Employee;