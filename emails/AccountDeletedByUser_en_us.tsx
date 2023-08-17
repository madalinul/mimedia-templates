import { Hr, Text, Heading } from '@react-email/components';
import React from 'react';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';

const AccountDeletedByUser = () => {
    return (
        <Template language='en'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                Your account has been deleted
            </Heading>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                You deleted your MiMedia account and we are very sorry about that. We hope that you
                will return to us again.
            </Text>
            <Text className='mb-2'>The {config.appName} Team</Text>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                If you did not make this change, please check your account details and contact us at{' '}
                <SupportLink /> if you believe someone has made an unauthorized change.
            </Text>
        </Template>
    );
};

export default AccountDeletedByUser;
