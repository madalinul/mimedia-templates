import { Text } from '@react-email/components';
import React from 'react';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const ScheduledProductChangeCauseOverage = ({
    partner = 'mimedia',
    language = 'en',
}: EmailProps) => {
    return (
        <Template language='en' partner={partner}>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                {`You are currently using {currentUseGB} Gb of cloud storage. The storage limit for the {futureProductName} is {futureLimitGB} Gb. 
                 Please remove {removeGB} of data to downgrade. Otherwise your request for plan change will NOT take effect, 
                 and you will be charged on {scheduledForTime} for {prevProductName}, as usual.`}
            </Text>
            <Text className='mb-2'>The {config[partner].appName} Team</Text>
        </Template>
    );
};

export default ScheduledProductChangeCauseOverage;
