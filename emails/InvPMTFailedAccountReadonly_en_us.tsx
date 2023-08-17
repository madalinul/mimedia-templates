import { Text } from '@react-email/components';
import React from 'react';
import Template from './components/Template';
import config from './config/config';

const InvPMTFailedAccountReadonly = () => {
    return (
        <Template language='en'>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                Your account has been suspended and switched to read only mode. Please upgrade your
                account to regain full access to your media.
            </Text>
            <Text className='mb-2'>The {config.appName} Team</Text>
        </Template>
    );
};

export default InvPMTFailedAccountReadonly;
