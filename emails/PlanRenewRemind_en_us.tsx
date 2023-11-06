import { Heading, Hr, Text } from '@react-email/components';
import React from 'react';
import CustomLink from './components/CustomLink';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';

const PlanRenewRemind = () => {
    return (
        <Template language='en'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                Plan renew scheduled on renewDate
            </Heading>
            <Text className='mb-2'>{'Hi firstName!'}</Text>
            <Text className='mb-2'>
                Just wanted to remind you that your current plan - planName is about to be renewed
                on renewDate. You can check your subscription and plan settings in your{' '}
                <CustomLink href='https://portal{envDomain}.mimedia.com/orbic/#/account/plans'>
                    account
                </CustomLink>{' '}
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

export default PlanRenewRemind;
