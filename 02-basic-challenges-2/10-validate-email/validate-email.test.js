const { validateEmail } = require("./validate-email");

describe("validateEmail", () => {
  it("Should validate correctly email addresses", () => {
    expect(validateEmail("john@example.com")).toBe(true);
    expect(validateEmail("jane.doe@domain.org")).toBe(true);

    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("@domain.com")).toBe(false);
    expect(validateEmail("user@domain")).toBe(false);
  });

  it("Should fail when not providing string", () => {
    // prettier-ignore
    const cases = [
      { value: {}, errorMessage: "Expected string but instead got: object" },
      { value: [1], errorMessage: "Expected string but instead got: object" },
      { value: null, errorMessage: "Expected string but instead got: object" },
      { value: 30, errorMessage: "Expected string but instead got: number" },
      { value: undefined, errorMessage: "Expected string but instead got: undefined" },
    ]

    cases.forEach(({ errorMessage, value }) => {
      try {
        expect(validateEmail(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
