// Core
import React from "react";
import { object } from "prop-types";

// Components
import FormLogin from "../../components/FormLogin";
// Instruments
import withForm from "../../instruments/withForm";

function Login (props) {
    const Form = withForm(FormLogin, props);

    return (
        <section className="section">
            <div className="section-content">
                <Form />
            </div>
        </section>
    );
}

Login.propTypes = {
    match: object.isRequired
};

export default Login;
