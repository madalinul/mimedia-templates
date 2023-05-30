import { Link } from '@react-email/components';
import React from 'react';

const CustomLink = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Link className={'text-brand text-[12px]' + className} {...restProps}>
            {children}
        </Link>
    );
};

export default CustomLink;
