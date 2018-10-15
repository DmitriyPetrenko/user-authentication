// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Instruments
import { validateRegistration } from "../../instruments/validation";
// Components
import Spinner from "../Spinner";

class FormRegistration extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isFocus: false,
            isFetching: false,
            formIsValid: false,
            account: {
                username: {
                    content: "",
                    isValid: null,
                    error: ""
                },
                email: {
                    content: "",
                    isValid: null,
                    error: ""
                },
                password: {
                    content: "",
                    isValid: null,
                    error: ""
                },
                confirmPassword: {
                    content: "",
                    isValid: null,
                    error: ""
                }
            }
        };
        this.timeOutId = null;
        this.resultOfValidation = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onClickHandler () {
        this.setState((currentState) => ({
            isFocus: !currentState.isFocus
        }));
    }

    onBlurHandler (event) {
        if (event.target.className !== "form__field") return;

        this.timeOutId = setTimeout(() => {
            this.setState({
                isFocus: false
            });
        });

        this.validationRegistrationField(event.target.id, event.target.value);
    }

    onFocusHandler () {
        clearTimeout(this.timeOutId);
    }

    validationRegistrationField (field, content) {
        let updatedStateOfAccount = null;

        switch (field) {
        case "username":
            this.resultOfValidation = validateRegistration.username(content);
            break;
        case "email":
            this.resultOfValidation = validateRegistration.email(content);
            break;
        case "password":
            this.resultOfValidation = validateRegistration.password(content);
            break;
        case "confirmPassword":
            this.resultOfValidation = validateRegistration.confirmPassword(this.state.account.password.content, content);
            break;
        }

        updatedStateOfAccount = { ...this.state.account, ...{ [field]: {
            content,
            isValid: this.resultOfValidation.isValid,
            error: this.resultOfValidation.error
        } } };

        this.setState({
            account: updatedStateOfAccount
        }, this.formValidHandler);
    }

    formValidHandler () {
        const allFieldsAreValid = Object.values(this.state.account).every((field) => field.isValid);

        if (allFieldsAreValid) {
            this.setState({
                formIsValid: true
            });
        } else {
            this.setState({
                formIsValid: false
            });
        }
    }

    onSubmitHandler () {
        fetch("/registration", {
            method: "POST",
            headers: {
                // "Authorization": TOKEN,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.account.username.content,
                email: this.state.account.email.content,
                password: this.state.account.email.content
            })
        })
            .then((response) => response)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => error);
    }

    render () {
        const { username, email, password, confirmPassword } = this.state.account;

        return (
            <div className="form">
                <div className="form__wrapper">
                    <form
                        className="form__inner"
                        onSubmit={ this.onSubmitHandler }
                        onClick={ this.onClickHandler }
                        onFocus={ this.onFocusHandler }
                        onBlur={ this.onBlurHandler }
                    >
                        <div className="form__head">
                            <h2 className="form__caption">Registration</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item">
                                <label className="form__label" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="form__field"
                                    name="username"
                                    id="username"
                                    type="text"
                                    aria-invalid={ username.isValid }
                                />
                                { !username.isValid && <span className="form__error error">{ username.error }</span> }
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="form__field"
                                    name="email"
                                    id="email"
                                    type="email"
                                    aria-invalid={ email.isValid }
                                />
                                { !email.isValid && <span className="form__error error">{ email.error }</span> }
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form__field"
                                    name="password"
                                    id="password"
                                    type="password"
                                    aria-invalid={ password.isValid }
                                />
                                { !password.isValid && <span className="form__error error">{ password.error }</span> }
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmlFor="confirmPassword">
                                    Confirm password
                                </label>
                                <input
                                    className="form__field"
                                    name="password"
                                    id="confirmPassword"
                                    type="password"
                                    aria-invalid={ confirmPassword.isValid }
                                />
                                { !confirmPassword.isValid && <span className="form__error error">{ confirmPassword.error }</span> }
                            </div>
                            <div className="form__body-item">
                                <button className="form__button" disabled={ !this.state.formIsValid }>
                                    { this.state.isFetching ? <Spinner /> : "create account" }
                                </button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">Do you have an account? <Link to="/login" className="link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegistration;
