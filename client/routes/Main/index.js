// Core
import React from 'react';
import { object } from 'prop-types';

// Components
import FormCorrection from '../../components/FormCorrection';
// Instruments
import withForm from '../../instruments/withForm';

function Main(props) {
    const Form = withForm(FormCorrection, props);

    return (
        <section className="section">
            <section className="section-content text-center">
                <Form />
            </section>
        </section>
    );
}

Main.propTypes = {
    match: object.isRequired
};

export default Main;
