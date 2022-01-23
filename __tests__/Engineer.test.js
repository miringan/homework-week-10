// Import Engineer class
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    // Initialization test
    describe("Initialization / Constructor", () => {
        // Positive Test
        it("Should create an object with properties name, ID, and email set to their respective arguments when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Mike';
            const id = '123';
            const email = 'example@example.com';
            const github = 'githubname'

            // Act
            const obj = new Engineer(name, id, email, github);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);

        });

        // Exception tests for blank string responses
        it("Should throw an error if not provided a name value", () => {
            // Arrange
            const cb = () => new Engineer("", "123", "example@example.com", "githubname");
            const err = Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an id value", () => {
            // Arrange
            const cb = () => new Engineer("Mike", "", "example@example.com", "githubname");
            const err = Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided an email value", () => {
            // Arrange
            const cb = () => new Engineer("Mike", "123", "", "githubname");
            const err = Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if not provided a github value", () => {
            // Arrange
            const cb = () => new Engineer("Mike", "123", "example@example.com", "");
            const err = Error(
                "Expected parameter 'github' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        });

    });

    // Test for getGithub function
    describe("getGithub", () => {

        it("Should return the github value of the Employee object", () => {

            // Arrange
            const obj1 = new Engineer("Mike", "123", "example@example.com", "githubname");
    
            // Act
            const call = obj1.getGithub();
    
            // Result
            expect(call).toEqual("githubname");

        })

    });

    // Test for getRole function
    describe("getRole", () => {

        it("Should return the Role value of the Employee object", () => {

            // Arrange
            const obj3 = new Engineer("Mike", "123", "example@example.com", "githubname");
    
            // Act
            const call = obj3.getRole();
    
            // Result
            expect(call).toEqual('Engineer');

        })

    });

})