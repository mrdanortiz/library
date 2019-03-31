import isAlpha from "validator/lib/isAlpha";

export const inputBoxValidation = (input: string) => 
input !== undefined &&
input !== null &&
isAlpha(input);
