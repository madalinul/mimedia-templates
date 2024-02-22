import { Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const SCHEDULEDPRODUCTCHANGE_STANDARDNOTIFICATION = ({
    partner = 'mimedia',
    language = 'ja',
}: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Text className='mb-2'>
                <Text className='mb-2'>
                    <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.hiName'} />
                </Text>
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    i18nKey={'productChangeNotification.standardMessage'}
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

export default SCHEDULEDPRODUCTCHANGE_STANDARDNOTIFICATION;
