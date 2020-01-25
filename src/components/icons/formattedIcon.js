import React from 'react';
import PropTypes from 'prop-types';
import {
  IconFacebook,
  IconGitHub,
  IconLinkedin,
  IconTwitter,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Facebook':
      return <IconFacebook />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconFacebook />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
