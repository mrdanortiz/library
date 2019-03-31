import React from "react";
import renderer from "react-test-renderer";
import { InputForm } from "./InputForm";

const setFormData = jest.fn();
const getImages = jest.fn();

it("renders correctly", () => {
    const tree = renderer.create(<InputForm setFormData={setFormData} getImages={getImages} />).toJSON();
    expect(tree).toMatchSnapshot();
});
