// Core
import React from "react";
import { object } from "prop-types";

// Components
import FormCorrection from "../../components/FormCorrection";
// Instruments
import withForm from "../../instruments/withForm";

function App ({ match }) {
    const Form = withForm(FormCorrection, match);

    return (
        <section className="section">
            <section className="section-content text-center">
                <Form />
            </section>
        </section>
    );
}

App.propTypes = {
    match: object.isRequired
};

export default App;
