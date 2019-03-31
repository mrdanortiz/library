import React, { FunctionComponent } from "react";
import { Message } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

interface Props {
    heading: string;
    message: string;
    color: string;
}

export const MessageBox: FunctionComponent<Props> = ({ heading, message, color }) => (
    <Message color={color as SemanticCOLORS}>
        <Message.Header>{heading}</Message.Header>
        <p>{message}</p>
    </Message>
);

export default MessageBox;
