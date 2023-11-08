import { Text } from '@react-email/components';
import React from 'react';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const ScheduledProductChangeStandardNotification = ({ partner = 'mimedia', language='en' }: EmailProps) => {
    return (
        <Template language='en' partner={partner}>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                {`You are scheduled to be switched over on {scheduledForTime} from {prevProductName} to {futureProductName} with {futureLimitGB} Gb.
			Please make sure to not go over {futureLimitGB} Gb, otherwise your request for plan change will NOT take effect at that time,
			and you will be charged on {scheduledForTime} for {prevProductName}, as usual.`}
            </Text>
            <Text className='mb-2'>The {config[partner].appName} Team</Text>
        </Template>
    );
};

export default ScheduledProductChangeStandardNotification;
