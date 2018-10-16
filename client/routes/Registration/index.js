// Core
import React from "react";
import { object } from "prop-types";

// Components
import FormRegistration from "../../components/FormRegistration";
// Instruments
import withForm from "../../instruments/withForm";

function Registration ({ match }) {
    const Form = withForm(FormRegistration, match);

    return (
        <section className="section">
            <div className="section-content">
                <Form />
            </div>
        </section>
    );
}

Registration.propTypes = {
    match: object.isRequired
};

export default Registration;
