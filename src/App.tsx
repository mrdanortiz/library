import React, { Component } from "react";
import "./App.css";
import { InputForm } from "./Components/InputForm";
import { Container } from "semantic-ui-react";
import { NavBar } from "./Components/NavBar";
import { connect } from "react-redux";
import { setInputData } from "./Actions/inputActions";
import { bindActionCreators } from "redux";

interface Props {
    setInputData: (value: string) => void;
}

class App extends Component<Props> {
    public render() {
        return (
            <Container className="keep-fixed" textAlign="center">
                <NavBar />
                <Container style={{ width: 600, padding: 10, marginTop: 60 }}>
                    <InputForm setInputData={this.props.setInputData} />
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => ({
    inputBoxData: state.inputDataReducer.inputBoxData,
});

export default connect(
    mapStateToProps,
    dispatch => ({
        ...bindActionCreators({ setInputData }, dispatch),
        dispatch,
    })
)(App);
