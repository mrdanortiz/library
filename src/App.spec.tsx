import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

const store = {
    dispatch: jest.fn(),
    getState: () => ({
        inputDataReducer: {
            inputBoxData: undefined,
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
