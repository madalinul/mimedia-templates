import { Heading, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const ReferFriendJoined = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template partner={partner} language={language}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'referJoined.winner'} />
            </Heading>
            <Text className='mb-2'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.hiName'} />
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName: config[partner].appName }}
                    i18nKey={'referJoined.acceptedInvitation'}
                />
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName: config[partner].appName }}
                    i18nKey={'common.theTeam'}
                />
            </Text>
        </Template>
    );
};

export default ReferFriendJoined;
