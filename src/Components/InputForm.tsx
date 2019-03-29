import React, { FunctionComponent } from "react";
import { Form } from "semantic-ui-react";

interface Props {
    setFormData: (name: string, value: string | boolean) => void;
    getImages: () => void;
}

export const InputForm: FunctionComponent<Props> = ({ setFormData, getImages }) => (
    <Form>
        <Form.Input name="inputBox" onChange={(e, { name, value }) => setFormData(name as string, value as string)} />
        <Form.Checkbox
            name="checkbox"
            label="Find a single image"
            onChange={(e, { name, checked }) => setFormData(name as string, checked as boolean)}
        />
        <Form.Button type="submit" onClick={() => getImages()}>
            Search
        </Form.Button>
    </Form>
);

export default InputForm;
