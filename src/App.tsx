import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "semantic-ui-react";
import { getImages, setFormData } from "./Actions/inputActions";
import "./App.css";
import GridLayout from "./Components/GridLayout";
import { InputForm } from "./Components/InputForm";
import { MessageBox } from "./Components/MessageBox";
import { NavBar } from "./Components/NavBar";

interface Props {
    splashImages: Array<{
        id: string;
        alt_description: string;
        urls: {
            raw: string;
            full: string;
            regular: string;
            small: string;
        };
    }>;
    errors: {
        inputBox: string;
        value: boolean;
    };
    setFormData: (name: string, value: string | boolean) => void;
    getImages: () => void;
}

class App extends Component<Props> {
    public render() {
        return (
            <Container textAlign="center">
                <NavBar />
                <Container text={true} style={{ marginTop: 90 }}>
                    <p>Enter a search term to find images</p>
                </Container>
                <Container style={{ width: 600, marginTop: 20 }}>
                    {this.props.errors && this.props.errors.inputBox 
                        ? <MessageBox color="red" heading="Error" message="Please only use alphabetical characters" />
                        : undefined 
                    }
                    <InputForm setFormData={this.props.setFormData} getImages={this.props.getImages} />
                </Container>
                <Container style={{ width: 600, padding: 20 }}>
                    <GridLayout splashImages={this.props.splashImages} />
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => ({
    splashImages: state.imageDataReducer.splashImages,
    errors: state.inputDataReducer.errors,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        ...bindActionCreators({ setFormData, getImages }, dispatch),
        dispatch,
    })
)(App);
