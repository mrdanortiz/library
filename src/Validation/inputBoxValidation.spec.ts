import { inputBoxValidation } from "./inputBoxValidation";

it("inputBoxValdation should accept only alpha characters [unit]", () => {
    expect(inputBoxValidation("paris")).toEqual(true);
    expect(inputBoxValidation("!paris")).toEqual(false);
    expect(inputBoxValidation("123")).toEqual(false);
    expect(inputBoxValidation("")).toEqual(false);
    expect(inputBoxValidation("  ")).toEqual(false);
});
