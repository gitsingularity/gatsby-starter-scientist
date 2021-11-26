/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';

import './opportunities.css';

const Opportunities = ({
  html,
}) => (
  <section
    className="opportunities"
    id="opportunities"
  >
    <h2>
      <FontAwesomeIcon icon={faCashRegister} />
      Opportunity
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

Opportunities.propTypes = {
  html: PropTypes.node.isRequired,
};

export default Opportunities;
