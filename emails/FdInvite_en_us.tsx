import React from 'react';
import Template from './components/Template';
import { Heading, Text, Row, Column, Img } from '@react-email/components';
import CustomButton from './components/CustomButton';

const FdInvite = () => {
    return (
        <Template>
            <Row>
                <Column align='center'>
                    <Text className='text-lg'>
                        <span
                            style={{
                                display: 'inline-block',
                                width: '84px',
                                height: '84px',
                                verticalAlign: 'middle',
                                borderRadius: '50%',
                                margin: '0 24px 0 11px',
                                textAlign: 'center',
                                color: '#fff',
                                lineHeight: '84px',
                                fontWeight: 'bold',
                                fontSize: '42px',
                                backgroundSize: '84px 84px',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: 'url({senderAvatar})',
                            }}
                            className='bg-brand'
                        />
                        {'{customMessage}'}
                    </Text>
                </Column>
            </Row>
            <Row>
                <Column align='center'>
                    <div
                        style={{
                            maxWidth: '380px',
                            height: '350px',
                            margin: 'auto',
                            background:
                                'url(http://portal.mimedia.com/images/emails/invite/mask.png) center top',
                            verticalAlign: 'middle',
                            textAlign: 'center',
                            paddingTop: '40px',
                        }}
                    >
                        <Img
                            style={{
                                height: '300px',
                                borderRadius: '100%',
                                width: '300px',
                                display: 'inline-block',
                            }}
                            src={'{coverImage}'}
                        />
                    </div>
                </Column>
            </Row>
            <Heading className='text-[32px] font-normal text-center p-0 mt-[30px] mx-0 my-0 mb-4'>
                You've been invited to the
            </Heading>
            <Heading className='text-brand text-[32px] font-normal text-center p-0 my-0 mx-0 mb-[30px]'>
                {'{fdName}'}
            </Heading>
            <Text className='text-lg text-center mb-6'>
                <span className='font-bold'>{'{inviterFirstName}'}</span> has given you permission
                to contribute, comment and chat with other members of the{' '}
                <span className='font-bold'>{'{fdName}'}</span>.
            </Text>
            <Row>
                <Column align='center'>
                    <Text className='text-base'>{'{fdMembers}'}</Text>
                    <Text className='text-sm'>{'{membersJoined}'}</Text>
                    <CustomButton href='http://{joinUrl}'>Join now!</CustomButton>
                </Column>
            </Row>
        </Template>
    );
};

export default FdInvite;
