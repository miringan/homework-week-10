const Intern = require('../lib/Intern');

describe("Intern", () => {

    // Methods

    describe("Initialization / Constructor", () => {
        // Positive Test
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Mike';
            const id = '123';
            const email = 'example@example.com';
            const school = 'uw'

            // Act
            const obj = new Intern(name, id, email, school);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);

        });

        // Exception Tests
        it("Should throw an error if not provided a name value", () => {
            // Arrange
            const cb = () => new Intern("", "123", "example@example.com", "uw");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            // Arrange
            const cb = () => new Intern("Mike", "", "example@example.com", "uw");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            // Arrange
            const cb = () => new Intern("Mike", "123", "", "uw");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided a school value", () => {
            // Arrange
            const cb = () => new Intern("Mike", "123", "example@example.com", "");
            const err = Error(
                "Expected parameter 'school' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    describe("getSchool", () => {

        it("Should return the school value of the Employee object", () => {

            // Arrange
            const obj1 = new Intern("Mike", "123", "example@example.com", "uw");
    
            // Act
            const call = obj1.getSchool();
    
            // Result
            expect(call).toEqual("uw");

        })

    });

    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            // Arrange
            const obj3 = new Intern("Mike", "123", "example@example.com", "uw");
    
            // Act
            const call = obj3.getRole();
    
            // Result
            expect(call).toEqual('Intern');

        })

    });

})