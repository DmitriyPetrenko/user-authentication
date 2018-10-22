// Core
import React, { Component } from "react";
import { func, bool, object } from "prop-types";

// Instruments
import { replacer } from "../../instruments/helpers";
// Components
import Spinner from "../Spinner";

class FormCorrection extends Component {
    static propTypes = {
        isFetching: bool.isRequired,
        formIsValid: bool.isRequired,
        isAuthenticated: bool.isRequired,
        onClickHandler: func.isRequired,
        onSubmitHandler: func.isRequired,
        onBlurHandler: func.isRequired,
        onFocusHandler: func.isRequired,
        formValidHandler: func.isRequired,
        history: object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            fields: {
                textarea: {
                    content: "",
                    isValid: null,
                    messageError: ""
                }
            }
        };

        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            onSubmitHandler
        } = this.props;
        const {
            textarea
        } = this.state.fields;
        const newStr = textarea.content.replace(/(^\w{1})/g, replacer);
        
        onSubmitHandler(event);
    }

    render () {
        const {
            textarea
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
                            <h2 className="form__caption">Form correction</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item text-left">
                                <label className="form__label" htmlFor="textarea">
                                    Input/Output
                                </label>
                                <textarea
                                    className="form__field form__field_textarea"
                                    name="textarea"
                                    id="textarea"
                                    aria-invalid={ textarea.isValid }
                                />
                                { !textarea.isValid &&
                                    <span className="form__error error">
                                        { textarea.messageError }
                                    </span>
                                }
                            </div>

                            <div className="form__body-item">
                                <button
                                    className="form__button"
                                    disabled={ !formIsValid || isFetching }
                                >
                                    { isFetching ? <Spinner /> : "process" }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormCorrection;
