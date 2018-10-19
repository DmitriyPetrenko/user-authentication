// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func, bool, object, string } from "prop-types";

// Instruments
import { validateRegistration } from "../../instruments/validation";
// Components
import Spinner from "../Spinner";
// Actions
import { registration } from "../../actions";

class FormRegistration extends Component {
    static propTypes = {
        isFetching: bool.isRequired,
        formIsValid: bool.isRequired,
        messageError: string.isRequired,
        onClickHandler: func.isRequired,
        onSubmitHandler: func.isRequired,
        onBlurHandler: func.isRequired,
        onFocusHandler: func.isRequired,
        formValidHandler: func.isRequired,
        setNewStateOfField: func.isRequired,
        dispatch: func.isRequired,
        history: object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            fields: {
                username: {
                    content: "",
                    isValid: null,
                    messageError: ""
                },
                email: {
                    content: "",
                    isValid: null,
                    messageError: ""
                },
                password: {
                    content: "",
                    isValid: null,
                    messageError: ""
                },
                passwordConfirm: {
                    content: "",
                    isValid: null,
                    messageError: ""
                }
            }
        };

        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validationRegistrationField (field, content) {
        const {
            formValidHandler,
            setNewStateOfField
        } = this.props;
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
        case "passwordConfirm":
            resultOfValidation = validateRegistration.passwordConfirm(this.state.fields.password.content, content);
            break;
        }

        // return updated state of field // func(prevState, newState, field)

        updatedStateOfFields = setNewStateOfField(this.state.fields, {
            content,
            isValid: resultOfValidation.isValid,
            messageError: resultOfValidation.messageError
        }, field);

        this.setState({
            fields: updatedStateOfFields
        }, formValidHandler(updatedStateOfFields));
    }

    onBlur (event) {
        this.props.onBlurHandler(event.target, this.validationRegistrationField.bind(this));
    }

    onSubmit (event) {
        const {
            dispatch,
            history,
            onSubmitHandler,
            setNewStateOfField,
            messageError
        } = this.props;
        const {
            username,
            email,
            password
        } = this.state.fields;
        const user = {
            username: username.content,
            email: email.content,
            password: password.content,
            createdDate: +new Date()
        };

        dispatch(registration(user, () => {
            history.push("/main");
        }));

        if (!onSubmitHandler(event)) {
            const updatedStateOfFields = setNewStateOfField(this.state.fields, {
                content: "",
                isValid: false,
                messageError
            }, "email");

            this.setState({
                fields: updatedStateOfFields
            });
        }
    }

    render () {
        const {
            username,
            email,
            password,
            passwordConfirm
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
                        onSubmit={ this.onSubmit }
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
                                { !username.isValid && <span className="form__error error">{ username.messageError }</span> }
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
                                { !email.isValid && <span className="form__error error">{ email.messageError }</span> }
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
                                { !password.isValid && <span className="form__error error">{ password.messageError }</span> }
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmlFor="passwordConfirm">
                                    Confirm password
                                </label>
                                <input
                                    className="form__field"
                                    name="password"
                                    id="passwordConfirm"
                                    type="password"
                                    aria-invalid={ passwordConfirm.isValid }
                                />
                                { !passwordConfirm.isValid && <span className="form__error error">{ passwordConfirm.messageError }</span> }
                            </div>
                            <div className="form__body-item">
                                <button className="form__button" disabled={ !formIsValid || isFetching }>
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

export default FormRegistration;
