import React from 'react';
import Template from './components/Template';
import { Heading, Text, Row, Column, Img } from '@react-email/components';
import CustomButton from './components/CustomButton';
import config from './config/config';

const ReferralEmail = () => {
    return (
        <Template language='en'>
            <Heading className='text-[24px] font-normal text-center p-0 mt-[30px] mx-0 mb-4 leading-small'>
                <span className='text-brand'>{'{senderName}'}</span> thought you'd love{' '}
                {config.appName}!
            </Heading>
            <Row className='mb-2'>
                <Column align='left'>
                    <Img src='{senderAvatar}' width='84px' height='84px' />
                </Column>
                <Column align='left' className='p-2'>
                    <Text>
                        With MiMedia, you have a personnal cloud designed to organize, manage, and
                        share all your photos, videos, music, and documents.
                    </Text>
                </Column>
            </Row>
            <Row className='mb-2'>
                <Column align='center'>
                    <Img width='80%' src='{portalUrl}/images/refer-friends/mail_invite_image.jpg' />
                </Column>
            </Row>
            <Text>
                Have multiple devices? Not a problem. {config.appName} is device agnostic. That
                means it communicates between Apple and Android devices seamlessly.
            </Text>
            <Text>
                Using too many apps to save and share your memories? Import everything from apps
                like Facebook, Dropbox, and Flickr and you'll experience digital organizational
                bliss.
            </Text>
            <Text>
                And the best part is you can privately share with your friends and family! If you're
                interested, we've got 10GB free waiting for you.
            </Text>
            <Row>
                <Column align='center'>
                    <CustomButton href='{portalUrl}'>Let's get started</CustomButton>
                </Column>
            </Row>
        </Template>
    );
};

export default ReferralEmail;
