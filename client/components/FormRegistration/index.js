// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func, bool } from "prop-types";
import { connect } from "react-redux";

// Instruments
import { validateRegistration } from "../../instruments/validation";
// Components
import Spinner from "../Spinner";
// Actions
import { newUser } from "../../actions";

class FormRegistration extends Component {
    static propTypes = {
        isFetching: bool.isRequired,
        formIsValid: bool.isRequired,
        onClickHandler: func.isRequired,
        onBlurHandler: func.isRequired,
        onFocusHandler: func.isRequired,
        formValidHandler: func.isRequired,
        dispatch: func.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            fields: {
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

        this.onBlur = this.onBlur.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    validationRegistrationField (field, content) {
        let updatedStateOfFields = null;
        let resultOfValidation = null;

        switch (field) {
        case "username":
            resultOfValidation = validateRegistration.username(content);
            break;
        case "email":
            resultOfValidation = validateRegistration.email(content);
            break;
        case "password":
            resultOfValidation = validateRegistration.password(content);
            break;
        case "confirmPassword":
            resultOfValidation = validateRegistration.confirmPassword(this.state.fields.password.content, content);
            break;
        }

        updatedStateOfFields = { ...this.state.fields, ...{ [field]: {
            content,
            isValid: resultOfValidation.isValid,
            error: resultOfValidation.error
        } } };

        this.setState({
            fields: updatedStateOfFields
        }, this.props.formValidHandler(updatedStateOfFields));
    }

    onBlur (event) {
        this.props.onBlurHandler(event.target, this.validationRegistrationField.bind(this));
    }

    onSubmitHandler (event) {
        event.preventDefault();

        const {
            username,
            email,
            password
        } = this.state.fields;
        const user = {
            username: username.content,
            email: email.content,
            password: password.content,
            registered: new Date()
        };

        this.props.dispatch(newUser(user));
    }

    render () {
        const {
            username,
            email,
            password,
            confirmPassword
        } = this.state.fields;
        const {
            isFetching,
            formIsValid,
            onClickHandler,
            onFocusHandler
        } = this.props;

        return (
            <div className="form">
                <div className="form__wrapper">
                    <form
                        className="form__inner"
                        onSubmit={ this.onSubmitHandler }
                        onClick={ onClickHandler }
                        onFocus={ onFocusHandler }
                        onBlur={ this.onBlur }
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
                                <button className="form__button" disabled={ !formIsValid }>
                                    { isFetching ? <Spinner /> : "create account" }
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

const mapStateToProps = (state) => ({
    isFetching: state.registration.isFetching
});

export default connect(mapStateToProps)(FormRegistration);
