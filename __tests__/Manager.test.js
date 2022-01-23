const Manager = require('../lib/Manager');

describe("Manager", () => {

    // Methods

    describe("Initialization / Constructor", () => {
        // Positive Test
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Mike';
            const id = '123';
            const email = 'example@example.com';
            const officeNumber = '121'

            // Act
            const obj = new Manager(name, id, email, officeNumber);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);

        });

        // Exception Tests
        it("Should throw an error if not provided a name value", () => {
            // Arrange
            const cb = () => new Manager("", "123", "example@example.com", "121");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            // Arrange
            const cb = () => new Manager("Mike", "", "example@example.com", "121");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            // Arrange
            const cb = () => new Manager("Mike", "123", "", "121");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an officeNumber value", () => {
            // Arrange
            const cb = () => new Manager("Mike", "123", "example@example.com", "");
            const err = Error(
                "Expected parameter 'Office Number' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getOfficeNumber", () => {

        it("Should return the officeNumber value of the Employee object", () => {

            // Arrange
            const obj1 = new Manager("Mike", "123", "example@example.com", "121");
    
            // Act
            const call = obj1.getOfficeNumber();
    
            // Result
            expect(call).toEqual("121");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            // Arrange
            const obj3 = new Manager("Mike", "123", "example@example.com", "121");
    
            // Act
            const call = obj3.getRole();
    
            // Result
            expect(call).toEqual('Manager');

        })

    });

})