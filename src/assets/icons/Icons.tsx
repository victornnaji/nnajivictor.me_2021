import React from 'react';
import PropTypes from 'prop-types';
import {
    IconExternal,
    IconGitHub,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
  } from '@src/assets/icons';

type IconProp = {
    name: string,
}
const Icons = ({name} : IconProp) => {
    switch (name){
        case 'External':
            return <IconExternal />;
        case 'GitHub':
            return <IconGitHub />;
        case 'Instagram':
            return <IconInstagram />;
        case 'Linkedin':
            return <IconLinkedin />;
        case 'Twitter':
            return <IconTwitter />;
        default:
            return <IconExternal />;
    }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};
  

export default Icons
