import React from "react";
import renderer from "react-test-renderer";
import { MessageBox } from "./MessageBox";

const props = {
    heading: "Error",
    message: "Please only use alphabetical characters",
    color: "red",
};

it("renders correctly", () => {
    const tree = renderer
        .create(<MessageBox heading={props.heading} message={props.message} color={props.color} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
