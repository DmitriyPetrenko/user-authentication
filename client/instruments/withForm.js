// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import UserActions from "../actions";

// Instruments
import { validateFieldOfForm } from "./validation";

const withForm = (WrappedComponent, props) => {
    class WithForm extends Component {
        constructor (props) {
            super(props);
            this.state = {
                isFocus: false,
                formIsValid: false
            };
            this.timeOutId = null;

            this.boundActionCreators = bindActionCreators(UserActions, props.dispatch);
            this.onClickHandler = this.onClickHandler.bind(this);
            this.onSubmitHandler = this.onSubmitHandler.bind(this);
            this.onBlurHandler = this.onBlurHandler.bind(this);
            this.onFocusHandler = this.onFocusHandler.bind(this);
            this.formValidHandler = this.formValidHandler.bind(this);
        }

        validationField (currentStateOfFields, field, content) {
            let updatedStateOfFields = null;
            let resultOfValidation = null;

            switch (field) {
            case "username":
            case "email":
            case "textarea":
            case "password":
                resultOfValidation = validateFieldOfForm.password(content);
                break;
            case "passwordConfirm":
                resultOfValidation = validateFieldOfForm.passwordConfirm(currentStateOfFields.password.content, content);
                break;
            }

            updatedStateOfFields = { ...currentStateOfFields, ...{ [field]: {
                content,
                isValid: resultOfValidation.isValid,
                messageError: resultOfValidation.messageError
            } } };

            return updatedStateOfFields;
        }

        formValidHandler (fields) {
            const allFieldsAreValid = Object.values(fields).every((field) => field.isValid);

            if (!allFieldsAreValid) {
                this.setState({
                    formIsValid: false
                });
            } else {
                this.setState({
                    formIsValid: true
                });
            }
        }

        onClickHandler (event) {
            if (event.target.className.indexOf("form__field") === -1) return;

            this.setState((currentState) => ({
                isFocus: !currentState.isFocus
            }));
        }

        onBlurHandler (currentStateOfFields, field) {
            this.timeOutId = setTimeout(() => {
                this.setState({
                    isFocus: false
                });
            });

            return this.validationField(currentStateOfFields, field.id, field.value);
        }

        onFocusHandler (event) {
            if (event.target.className.indexOf("form__field") === -1) return;

            clearTimeout(this.timeOutId);
        }

        onSubmitHandler (event) {
            event.preventDefault();

            if (this.state.formIsValid && !this.props.isAuthenticated) {
                this.setState({
                    formIsValid: false
                });
            }
        }

        render () {
            const {
                formIsValid
            } = this.state;

            return (
                <WrappedComponent
                    { ...props }
                    { ...this.props }
                    { ...this.boundActionCreators }
                    formIsValid={ formIsValid }
                    onClickHandler={ this.onClickHandler }
                    onSubmitHandler={ this.onSubmitHandler }
                    onBlurHandler={ this.onBlurHandler }
                    onFocusHandler={ this.onFocusHandler }
                    formValidHandler={ this.formValidHandler }
                />
            );
        }
    }

    const mapStateToProps = ({ authentication }) => ({
        isFetching: authentication.isFetching,
        isAuthenticated: authentication.isAuthenticated,
        messageError: authentication.messageError
    });

    return connect(mapStateToProps)(WithForm);
};

export default withForm;
