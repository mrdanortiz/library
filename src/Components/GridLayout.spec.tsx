import React from "react";
import renderer from "react-test-renderer";
import { GridLayout } from "./GridLayout";

const splashImages = [
    {
        "id": "dO2WTawCTC4",
        "alt_description": "A gray and white husky drinking water out of a Boxed Water carton",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjYzNTYzfQ",
            "full": "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzNTYzfQ",
            "regular": "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjYzNTYzfQ",
            "small": "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYzNTYzfQ",
            "thumb": "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjYzNTYzfQ"
        }
    }
];

it("renders correctly", () => {
    const tree = renderer.create(<GridLayout splashImages={splashImages} />).toJSON();
    expect(tree).toMatchSnapshot();
});
