
import { anotherPlaceholder } from "src/queries/placeholder";

test("should return placeholder", () => {
    const placeholder = "anotherPlaceholder";
    expect(placeholder).toBe(anotherPlaceholder());
});
