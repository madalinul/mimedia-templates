import { Heading, Hr, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const DEFAULTCARDCHANGE = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template partner={partner} language={language}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ teamName: config[partner].appName }}
                    i18nKey={'defaultCardChange.billingUpdated'}
                />
            </Heading>
            <Text className='mb-2'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.hiName'} />
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName: config[partner].appName }}
                    i18nKey={'defaultCardChange.ourRecords'}
                />
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName: config[partner].appName }}
                    i18nKey={'common.theTeam'}
                />
            </Text>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{ link1: <SupportLink link={config[partner].supportEmail} /> }}
                    i18nKey={'common.unauthorizedChange'}
                />
            </Text>
        </Template>
    );
};

export default DEFAULTCARDCHANGE;
