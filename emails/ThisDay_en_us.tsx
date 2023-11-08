import { Column, Heading, Hr, Img, Row, Section, Text } from '@react-email/components';
import * as React from 'react';
import CustomButton from './components/CustomButton';
import CustomLink from './components/CustomLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

export const ThisDay = ({ partner = 'mimedia', language='en' }: EmailProps) => {
    return (
        <Template language='en' partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                Check out your memories from{' '}
                <span className='text-brand'>{'this {scope} in {year}'}</span>
            </Heading>
            <Text className='text-[14px] leading-[24px]'>
                {'Hey {userName}, take a trip down memory lane with these photos.'}
            </Text>
            <Section>
                <Row>
                    <Column align='center'>
                        <Img src={'{mainImageUrl}'} />
                    </Column>
                </Row>
            </Section>
            <Section className='text-center mt-[32px] mb-[32px]'>
                <CustomButton href={'http://{baseUrl}/{shareKey}'}>
                    Click here to view on {config[partner].appName}!
                </CustomButton>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs leading-[24px]'>
                If you'd rather not receive these emails from MiMedia in the future, please{' '}
                <CustomLink
                    href={'https://portal.mimedia.com/#account/unsubscribe?emailType=this_day'}
                    className='text-brand text-[12px]'
                >
                    unsubscribe.
                </CustomLink>
            </Text>
        </Template>
    );
};

export default ThisDay;
