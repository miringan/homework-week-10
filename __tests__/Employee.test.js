// Import Employee class
const Employee = require('../lib/Employee');

describe("Employee", () => {

    // Initialization test
    describe("Initialization / Constructor", () => {
        // Positive Test
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Mike';
            const id = '123';
            const email = 'example@example.com';

            // Act
            const obj = new Employee(name, id, email);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);

        });

        // Exception tests for blank string responses
        it("Should throw an error if not provided a name value", () => {
            // Arrange
            const cb = () => new Employee("", "123", "example@example.com");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            // Arrange
            const cb = () => new Employee("Mike", "", "example@example.com");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            // Arrange
            const cb = () => new Employee("Mike", "123", "");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    // Test for getName function
    describe("getName", () => {

        it("Should return the name value of the Employee object", () => {

            // Arrange
            const obj1 = new Employee("Mike", "123", "example@example.com");
    
            // Act
            const call = obj1.getName();
    
            // Result
            expect(call).toEqual("Mike");

        })

    });

    // Test for getId function
    describe("getId", () => {

        it("Should return the id value of the Employee object", () => {

            // Arrange
            const obj2 = new Employee("Mike", "123", "example@example.com");
    
            // Act
            const call = obj2.getId();
    
            // Result
            expect(call).toEqual("123");

        })

    });

    // Test for getEmail function
    describe("getEmail", () => {

        it("Should return the email value of the Employee object", () => {

            // Arrange
            const obj3 = new Employee("Mike", "123", "example@example.com");
    
            // Act
            const call = obj3.getEmail();
    
            // Result
            expect(call).toEqual("example@example.com");

        })

    });

    // Test for getRole function
    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            // Arrange
            const obj3 = new Employee("Mike", "123", "example@example.com");
    
            // Act
            const call = obj3.getRole();
    
            // Result
            expect(call).toEqual('Employee');

        })

    });

})