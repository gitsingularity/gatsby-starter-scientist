import PropTypes from 'prop-types';
import React from 'react';

import Links from './links';

import './footer.css';

const Footer = ({
  author,
  links,
}) => (
  <footer className="footer">
    {
      links.length > 0
      && <Links links={links} />
    }
    <small>
      © 
      {' thesingularity.eth '}
      {author}
      |
      {' free for all - for all of time and space.'}
      .
    </small>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Footer;
