import { Heading, Text } from '@react-email/components';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const ReferFriendJoined = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                You really know how to pick a winner!
            </Heading>
            <Text className='mb-2'>
                {`Now that {userName} has accepted your invitation, we've added {storageBonus} to your ${config[partner].appName} account. Now that's what we call teamwork!`}
            </Text>
            <Text className='mb-2'>The {config[partner].appName} Team</Text>
        </Template>
    );
};

export default ReferFriendJoined;
