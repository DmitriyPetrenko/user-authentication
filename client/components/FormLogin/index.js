// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func, bool } from "prop-types";
import { connect } from "react-redux";

// Instruments
import { validateLogin } from "../../instruments/validation";
// Components
import Spinner from "../Spinner";

class FormLogin extends Component {
    static propTypes = {
        isFetching: bool.isRequired,
        formIsValid: bool.isRequired,
        onClickHandler: func.isRequired,
        onBlurHandler: func.isRequired,
        onFocusHandler: func.isRequired,
        formValidHandler: func.isRequired
    };

    constructor (props) {
        super(props);

        this.state = {
            isFocus: false,
            isFetching: false,
            formIsValid: false,
            fields: {
                username: {
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
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    validationLoginField (field, content) {
        let updatedStateOfAccount = null;
        let resultOfValidation = null;

        switch (field) {
        case "username":
            resultOfValidation = validateLogin.username(content);
            break;
        case "password":
            resultOfValidation = validateLogin.password(content);
            break;
        }

        updatedStateOfAccount = { ...this.state.fields, ...{ [field]: {
            content,
            isValid: resultOfValidation.isValid,
            messageError: resultOfValidation.messageError
        } } };

        this.setState({
            fields: updatedStateOfAccount
        }, this.props.formValidHandler(updatedStateOfAccount));
    }

    onBlur (event) {
        this.props.onBlurHandler(event.target, this.validationLoginField.bind(this));
    }

    onSubmitHandler () {

    }

    render () {
        const {
            username,
            password
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
                        // onSubmit={ this.onSubmitHandler }
                        onClick={ onClickHandler }
                        onFocus={ onFocusHandler }
                        onBlur={ this.onBlur }
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
                                { !username.isValid && <span className="form__error error">{ username.messageError }</span> }
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
                                { !password.isValid && <span className="form__error error">{ password.messageError }</span> }
                            </div>
                            <div className="form__body-item">
                                <button className="form__button" disabled={ !formIsValid }>
                                    { isFetching ? <Spinner /> : "Login" }
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

const mapStateToProps = (state) => ({
    isFetching: state.login.isFetching
});

export default connect(mapStateToProps)(FormLogin);
