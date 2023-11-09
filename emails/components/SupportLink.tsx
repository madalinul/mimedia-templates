import React from 'react';
import config from '../config/config';
import CustomLink from './CustomLink';

const SupportLink = ({ link }: { link: string }) => {
    return <CustomLink href={`mailto:${link}`}>{link}</CustomLink>;
};

export default SupportLink;
