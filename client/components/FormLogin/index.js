// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func, bool, object, string } from "prop-types";

// Components
import Spinner from "../Spinner";

class FormLogin extends Component {
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
        login: func.isRequired,
        history: object.isRequired,
        location: object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            fields: {
                email: {
                    content: "",
                    isValid: null,
                    messageError: ""
                },
                password: {
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
            messageError: ""
        }, password: {
            content: "",
            isValid: false,
            messageError: ""
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
        const updatedStateOfFields = onBlurHandler(this.state.fields, event.target);

        this.setState({
            fields: updatedStateOfFields
        }, formValidHandler(updatedStateOfFields));
    }

    onSubmit (event) {
        const {
            login,
            history,
            onSubmitHandler
        } = this.props;
        const {
            email,
            password
        } = this.state.fields;
        const user = {
            email: email.content,
            password: password.content
        };

        login(user, () => {
            history.push("/main");
        }, () => {
            this.serverErrorHandler();
        });

        onSubmitHandler(event);
    }

    render () {
        const {
            email,
            password
        } = this.state.fields;
        const {
            isFetching,
            formIsValid,
            messageError,
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
                        { messageError && messageError !== "" && (
                            <div className="form__error_auth">
                                { messageError }
                            </div>
                        ) }
                        <div className="form__head">
                            <h2 className="form__caption">Login</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item">
                                <label className="form__label" htmfor="email">
                                    Email
                                </label>
                                <input
                                    className="form__field"
                                    name="email"
                                    id="email"
                                    type="text"
                                    aria-invalid={ email.isValid }
                                />
                                { !email.isValid &&
                                    <span className="form__error error">
                                        { email.messageError }
                                    </span>
                                }
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
                                { !password.isValid &&
                                    <span className="form__error error">
                                        { password.messageError }
                                    </span>
                                }
                            </div>
                            <div className="form__body-item">
                                <button
                                    className="form__button"
                                    disabled={ !formIsValid || isFetching }
                                >
                                    { isFetching ? <Spinner /> : "Login" }
                                </button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">
                                Do not have an account? <Link to="/registration" className="link">Registration</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormLogin;
