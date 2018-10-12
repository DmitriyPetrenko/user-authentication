// Core
import React, { Component } from "react";

// Instruments
import { validate } from "../../instruments/validation";

class FormRegistration extends Component {
    constructor (props) {
        super(props);
        this.state = {
            disabled: true,
            isFocus: false,
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
        this.timeOutId = setTimeout(() => {
            this.setState({
                isFocus: false
            });
        });

        this.validation(event.target.id, event.target.value);
    }

    onFocusHandler () {
        clearTimeout(this.timeOutId);
    }

    onSubmitHandler () {

    }

    validation (field, content) {
        switch (field) {
        case "username":
            this.resultOfValidation = validate.username(content);
            break;
        case "email":
            this.resultOfValidation = validate.email(content);
            break;
        case "password":
            this.resultOfValidation = validate.password(content);
            break;
        case "confirmPassword":
            this.resultOfValidation = validate.confirmPassword(this.state.account.password.content, content);
            break;
        }

        const updatedStateOfAccount = { ...this.state.account, ...{ [field]: {
            content,
            isValid: this.resultOfValidation.isValid,
            error: this.resultOfValidation.error
        } } };

        this.setState({
            account: updatedStateOfAccount
        });
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
                                    aria-haspopup="true"
                                    aria-invalid={ username.isValid }
                                    aria-expanded={ this.state.isFocus }
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
                                    aria-haspopup="true"
                                    aria-invalid={ email.isValid }
                                    aria-expanded={ this.state.isFocus }
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
                                    aria-haspopup="true"
                                    aria-invalid={ password.isValid }
                                    aria-expanded={ this.state.isFocus }
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
                                    aria-haspopup="true"
                                    aria-invalid={ confirmPassword.isValid }
                                    aria-expanded={ this.state.isFocus }
                                />
                                { !confirmPassword.isValid && <span className="form__error error">{ confirmPassword.error }</span> }
                            </div>
                            <div className="form__body-item">
                                <button className="form__button" disabled={ this.state.disabled }>create account
                                </button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">Do you have an account?</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegistration;
