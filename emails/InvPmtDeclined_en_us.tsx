import { Heading, Hr, Section, Text } from '@react-email/components';
import React from 'react';
import CustomButton from './components/CustomButton';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const InvPmtDeclined = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language='en' partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                Your payment for {'{planDescription}'} was not successful
            </Heading>
            <Text className='mb-2'>{'Hi {firstName}!'}</Text>
            <Text className='mb-2'>
                {`It seems like your payment, made on {paymentDate} for {paymentAmount}, was declined. This could be due to a change in your card number or your card expiring, cancelation of your credit card, or the bank not recognizing the payment and taking action to prevent it.`}
            </Text>
            <Text className='mb-2'>
                Please check your card information on your Billing page or contact support team.
            </Text>
            <Text className='mb-2'>Cheers,</Text>
            <Text className='mb-2'>The {config[partner].appName} Team</Text>
            <Section className='text-center'>
                <CustomButton href='http://portal.mimedia.com/orbic' className='inline-block mr-4'>
                    View billing info
                </CustomButton>
                <CustomButton href={`mailto:${config[partner].supportEmail}`}>
                    Contact support
                </CustomButton>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                Please contact us at <SupportLink link={config[partner].supportEmail} /> for more
                information.
            </Text>
        </Template>
    );
};

export default InvPmtDeclined;
