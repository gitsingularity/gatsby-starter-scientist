/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

import './contact.css';

const Contact = ({
  html,
}) => (
  <section
    className="contact"
    id="contact"
  >
    <h2>
      <FontAwesomeIcon icon={faSatelliteDish} />
      Contact
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

Contact.propTypes = {
  html: PropTypes.node.isRequired,
};

export default Contact;
