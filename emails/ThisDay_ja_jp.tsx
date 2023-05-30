import { Column, Heading, Hr, Img, Row, Section, Text } from '@react-email/components';
import * as React from 'react';
import CustomButton from './components/CustomButton';
import CustomLink from './components/CustomLink';
import Template from './components/Template';
import config from './config/config';

export const ThisDay = () => {
    return (
        <Template language='ja'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                <span className='text-brand'>{'{year}のこの{scope} '}</span>
                の思い出を見てみましょう
            </Heading>
            <Text className='text-[14px] leading-[24px]'>
                {'{userName}様、これらの写真で思い出を振り返ってみましょう'}
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
                    ここをクリックすると {config.appName} で見ることができます！
                </CustomButton>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs leading-[24px]'>
                当社からのこのようなメールを今後、受け取りたくない場合、
                <CustomLink
                    href={'https://portal.mimedia.com/#account/unsubscribe?emailType=this_day'}
                    className='text-brand text-[12px]'
                >
                    配信を停止してくださ.
                </CustomLink>
            </Text>
        </Template>
    );
};

export default ThisDay;
