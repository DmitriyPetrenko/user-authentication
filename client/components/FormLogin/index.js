// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Instruments
import { validateLogin } from "../../instruments/validation";
// Components
import Spinner from "../Spinner";

class FormLogin extends Component {
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
                password: {
                    content: "",
                    isValid: null,
                    error: ""
                }
            }
        };
        this.timeOutId = null;
        this.resultOfValidation = null;
        this.lengthOfObject = Object.keys(this.state.account).length;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        // this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount () {
        console.log("componentDidMount");
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

        this.validationLoginField(event.target.id, event.target.value);
    }

    onFocusHandler () {
        clearTimeout(this.timeOutId);
    }

    validationLoginField (field, content) {
        switch (field) {
        case "username":
            this.resultOfValidation = validateLogin.username(content);
            break;
        case "password":
            this.resultOfValidation = validateLogin.password(content);
            break;
        }

        const updatedStateOfAccount = { ...this.state.account, ...{ [field]: {
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

    render () {
        const { username, password } = this.state.account;

        return (
            <div className="form">
                <div className="form__wrapper">
                    <form
                        className="form__inner"
                        // onSubmit={ this.onSubmitHandler }
                        onClick={ this.onClickHandler }
                        onFocus={ this.onFocusHandler }
                        onBlur={ this.onBlurHandler }
                    >
                        <div className="form__head">
                            <h2 className="form__caption">Login</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item">
                                <label className="form__label" htmfor="username">
                                    Email or username
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
                                <label className="form__label" htmfor="password">
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
                                <button className="form__button" disabled={ !this.state.formIsValid }>
                                    { this.state.isFetching ? <Spinner /> : "Login" }
                                </button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">Do not have an account? <Link to="/registration" className="link">Registration</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormLogin;
