import { Heading, Hr, Text } from '@react-email/components';
import React from 'react';
import CustomLink from './components/CustomLink';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const ProductChange = ({ partner = 'mimedia', language='en' }: EmailProps) => {
    return (
        <Template language='en' partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                Your Storage plan has been updated.
            </Heading>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                Our records show that you updated your storage plan from a {'{prevProductName}'} to
                a <span className='font-bold'>{'{currProductName}'}</span> account on{' '}
                {'{changeTime}'}. Click{' '}
                <CustomLink href='https://portal{envDomain}.mimedia.com/orbic/#/account/billing'>
                    here
                </CustomLink>{' '}
                to access billing details regarding your plan.
            </Text>
            <Text className='mb-2'>The {config[partner].appName} Team</Text>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                If you did not make this change, please check your account details and contact us at{' '}
                <SupportLink link={config[partner].supportEmail} /> if you believe someone has made an unauthorized change.
            </Text>
        </Template>
    );
};

export default ProductChange;
