// Core
import React, { Component } from "react";

const withForm = (WrappedComponent, match) => (
    class WithForm extends Component {
        constructor (props) {
            super(props);
            this.state = {
                isFocus: false,
                formIsValid: false
            };
            this.timeOutId = null;

            this.onClickHandler = this.onClickHandler.bind(this);
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

        render () {
            const {
                formIsValid
            } = this.state;

            return (
                <WrappedComponent
                    {...match}
                    formIsValid={ formIsValid }
                    onClickHandler={ this.onClickHandler }
                    onBlurHandler={ this.onBlurHandler }
                    onFocusHandler={ this.onFocusHandler }
                    formValidHandler={ this.formValidHandler }
                />
            );
        }
    }
);

export default withForm;
