
const upperCase = require("../upperCase");

describe("test suite", () => {   
    test("Capitalize text 1", () => {

        const input = "hello";
        const expectedResult = "HELLO";
        expect(upperCase(input)).toBe(expectedResult);

    });

    test("Capitalize text 2", () => {

        const input = "bAtMaN";
        const expectedResult = "BATMAN";
        expect(upperCase(input)).toBe(expectedResult);

    });
});