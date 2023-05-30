import React from 'react';
import config from '../config/config';
import CustomLink from './CustomLink';

const SupportLink = () => {
    return <CustomLink href={`mailto:${config.supportEmail}`}>{config.supportEmail}</CustomLink>;
};

export default SupportLink;
