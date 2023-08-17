import { Heading, Hr, Text } from '@react-email/components';
import React from 'react';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';

const ReferFriendJoined = () => {
    return (
        <Template language='en'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                You really know how to pick a winner!
            </Heading>
            <Text className='mb-2'>
                {`Now that {userName} has accepted your invitation, we've added {storageBonus} to your ${config.appName} account. Now that's what we call teamwork!`}
            </Text>
            <Text className='mb-2'>The {config.appName} Team</Text>
        </Template>
    );
};

export default ReferFriendJoined;
