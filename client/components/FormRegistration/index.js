// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func, bool, object, string } from "prop-types";

// Components
import Spinner from "../Spinner";

class FormRegistration extends Component {
    static propTypes = {
        isFetching: bool.isRequired,
        formIsValid: bool.isRequired,
        isAuthenticated: bool.isRequired,
        messageError: string.isRequired,
        onClickHandler: func.isRequired,
        onSubmitHandler: func.isRequired,
        onBlurHandler: func.isRequired,
        onFocusHandler: func.isRequired,
        formValidHandler: func.isRequired,
        registration: func.isRequired,
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
        this.serverErrorHandler = this.serverErrorHandler.bind(this);
    }

    componentDidMount () {
        const {
            isAuthenticated,
            history
        } = this.props;

        if (isAuthenticated) {
            history.push("/main");
        }
    }

    serverErrorHandler () {
        const updatedStateOfFields = { ...this.state.fields, ...{ email: {
            content: "",
            isValid: false,
            messageError: this.props.messageError
        } } };

        this.setState({
            fields: updatedStateOfFields
        });
    }

    onBlur (event) {
        if (event.target.className.indexOf("form__field") === -1) return;

        const {
            onBlurHandler,
            formValidHandler
        } = this.props;
        const {
            fields
        } = this.state;

        const updatedStateOfFields = onBlurHandler(fields, event.target);

        this.setState({
            fields: updatedStateOfFields
        }, formValidHandler(updatedStateOfFields));
    }

    onSubmit (event) {
        const {
            registration,
            history,
            onSubmitHandler
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

        registration(user, () => {
            history.push("/main");
        }, () => {
            this.serverErrorHandler();
        });

        onSubmitHandler(event);
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
                                { !username.isValid &&
                                    <span className="form__error error">
                                        { username.messageError }
                                    </span>
                                }
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
                                { !email.isValid &&
                                    <span className="form__error error">
                                        { email.messageError }
                                    </span>
                                }
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
                                { !password.isValid &&
                                    <span className="form__error error">
                                        { password.messageError }
                                    </span>
                                }
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
                                { !passwordConfirm.isValid &&
                                    <span className="form__error error">
                                        { passwordConfirm.messageError }
                                    </span>
                                }
                            </div>
                            <div className="form__body-item">
                                <button
                                    className="form__button"
                                    disabled={ !formIsValid || isFetching }
                                >
                                    { isFetching ? <Spinner /> : "create account" }
                                </button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">
                                Do you have an account? <Link to="/login" className="link">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegistration;
