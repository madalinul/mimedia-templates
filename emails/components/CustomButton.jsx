//@ts-ignore
import { Button } from '@react-email/components';
import React from 'react';

const CustomButton = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Button
            {...restProps}
            pX={20}
            pY={8}
            className={
                'text-sm bg-brand rounded text-white font-semibold no-underline text-center' +
                className
            }
        >
            {children}
        </Button>
    );
};

export default CustomButton;
