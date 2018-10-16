// Core
import React from "react";
import { object } from "prop-types";

// Components
import Welcome from "../../components/Welcome";
import FormCorrection from "../../components/FormCorrection";
// Instruments
import withForm from "../../instruments/withForm";

function Home ({ match }) {
    const Form = withForm(FormCorrection, match);
    const signedIn = true;

    return (
        <section className="section">
            <section className="section-content text-center">
                { signedIn ? <Form /> : <Welcome /> }
            </section>
        </section>
    );
}

Home.propTypes = {
    match: object.isRequired
};

export default Home;
