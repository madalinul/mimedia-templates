import { Column, Heading, Img, Link, Row, Section, Text } from '@react-email/components';
import * as React from 'react';
import CustomButton from './components/CustomButton';
import Template from './components/Template';
import config from './config/config';

export const SharedMediaItem = () => {
    return (
        <Template>
            <Heading className='leading-8 text-[24px] font-normal text-center p-0 my-[30px] mx-0 l'>
                <span>{'{senderFirstName}'}</span> shared <span>{'{sharedItemDescription}'}</span>{' '}
                with you <span className='text-brand'>{'{collectionName}'}</span>
            </Heading>
            <Section>
                <Row>
                    <Column align='center'>
                        <Img
                            className='rounded-full inline-block align-middle'
                            width='84px'
                            height='84px'
                            src={'{senderAvatar}'}
                        />
                        <Text className='inline-block align-middle'>{'{messageText}'}</Text>
                    </Column>
                </Row>
            </Section>
            <Section className='my-8'>
                <Row>
                    <Column align='center'>
                        <Link href={'http://{baseUrl}/{shareKey}'}>
                            <Img src={'{mainImageUrl}'} />
                        </Link>
                    </Column>
                </Row>
            </Section>
            <Section className='text-center mt-[32px] mb-[32px]'>
                <CustomButton href={'http://{baseUrl}/{shareKey}'}>
                    Click here to view on {config.appName}!
                </CustomButton>
            </Section>
        </Template>
    );
};

export default SharedMediaItem;
