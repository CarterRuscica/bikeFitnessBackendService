import { placeholder } from "src/index";

test("should return placeholder", () => {
    const expectedValue = "placeholder";
    expect(expectedValue).toBe(placeholder());
});
