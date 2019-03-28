import React, { FunctionComponent } from "react";
import { Form } from "semantic-ui-react";

interface Params {
    setInputData: (value: string) => void;
}
export const InputForm: FunctionComponent<Params> = props => (
    <Form>
        <Form.Input onChange={(e, { value }) => props.setInputData(value)} />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button type="submit">Submit</Form.Button>
    </Form>
);

export default InputForm;
