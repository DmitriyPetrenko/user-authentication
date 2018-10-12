// Core
import React, { Component } from "react";

class FormLogin extends Component {
    constructor (props) {
        super(props);

        this.state = {
            disabled: true
        };
    }

    render () {
        return (
            <div className="form">
                <div className="form__wrapper">
                    <form className="form__inner">
                        <div className="form__head">
                            <h2 className="form__caption">Login</h2>
                        </div>
                        <div className="form__body">
                            <div className="form__body-item">
                                <label className="form__label" htmfor="username">
                                    Email or username
                                </label>
                                <input className="form__field" name="username" id="username" type="text" />
                            </div>
                            <div className="form__body-item">
                                <label className="form__label" htmfor="password">
                                    Password
                                </label>
                                <input className="form__field" name="password" id="password" type="password" />
                            </div>
                            <div className="form__body-item">
                                <button className="form__button" disabled={ this.state.disabled }>Login</button>
                            </div>
                        </div>
                        <div className="form__footer text-center">
                            <p className="form__footer-text">Do not have an account?</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormLogin;
