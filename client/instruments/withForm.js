// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import * as UserActions from "../actions";

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

        onClickHandler () {
            this.setState((currentState) => ({
                isFocus: !currentState.isFocus
            }));
        }

        onBlurHandler (field, validationFormField) {
            if (field.className !== "form__field" && field.className !== "form__field form__field_textarea") return;

            this.timeOutId = setTimeout(() => {
                this.setState({
                    isFocus: false
                });
            });

            validationFormField(field.id, field.value);
        }

        onFocusHandler () {
            clearTimeout(this.timeOutId);
        }

        formValidHandler (fields) {
            const allFieldsAreValid = Object.values(fields).every((field) => field.isValid);

            if (!allFieldsAreValid && !this.state.formIsValid) {
                return;
            } else if (!allFieldsAreValid) {
                this.setState({
                    formIsValid: false
                });
            } else {
                this.setState({
                    formIsValid: true
                });
            }
        }

        setNewStateOfField (prevState, newState, field) {
            const updatedStateOfFields = { ...prevState, ...{ [field]: newState } };

            return updatedStateOfFields;
        }

        onSubmitHandler (event) {
            event.preventDefault();

            if (this.state.formIsValid && !this.props.isAuthenticated) {
                this.setState({
                    formIsValid: false
                });

                return false;
            }

            return true;
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
                    setNewStateOfField={ this.setNewStateOfField }
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
