// Core
import React, { Component } from "react";

class FormRegistration extends Component {
    render () {
        return (
            <div className="form">
                <div className="form__wrapper">
                    <form className="form__inner">
                        <div className="form__head">
                            <h2 className="form__caption">Registration</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item">
                                <label className="form__label" htmfor="username">
                                    Username
                                </label>
                                <input className="form__field" name="username" id="username" type="text" />
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmfor="email">
                                    Email
                                </label>
                                <input className="form__field" name="email" id="email" type="email" />
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmfor="password">
                                    Password
                                </label>
                                <input className="form__field" name="password" id="password" type="password" />
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmfor="confirm-password">
                                    Confirm password
                                </label>
                                <input className="form__field" name="password" id="confirm-password" type="password" />
                            </div>
                            <div className="form__body-item">
                                <button className="form__button">Login</button>
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
