import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

const store = {
    dispatch: jest.fn(),
    getState: () => ({
        imageDataReducer: {
            splashImages: [],
        },
        inputDataReducer: {
            errors: {},
        },
    }),
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
};

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
