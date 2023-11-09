import { Heading, Hr, Section, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import CustomButton from './components/CustomButton';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const InvPmtDeclined = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    i18nKey={'pmtDeclined.notSuccessful'}
                />
            </Heading>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ teamName: config[partner].appName }}
                    i18nKey={'common.hiName'}
                />
            </Text>
            <Text className='mb-2'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'pmtDeclined.declined'} />
            </Text>
            <Text className='mb-2'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'pmtDeclined.checkCard'} />
            </Text>
            <Text className='mb-2'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.cheers'} />
            </Text>
            <Text className='mb-2'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName: config[partner].appName }}
                    i18nKey={'common.theTeam'}
                />
            </Text>
            <Section className='text-center'>
                <CustomButton href={config[partner].appUrl} className='inline-block mr-4'>
                    <Trans
                        i18n={getInstanceFromLanguage(language)}
                        i18nKey={'pmtDeclined.viewBilling'}
                    />
                </CustomButton>
                <CustomButton href={`mailto:${config[partner].supportEmail}`}>
                    <Trans
                        i18n={getInstanceFromLanguage(language)}
                        i18nKey={'pmtDeclined.contactSupport'}
                    />
                </CustomButton>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{ link1: <SupportLink link={config[partner].supportEmail} /> }}
                    i18nKey={'common.contactUs'}
                />
            </Text>
        </Template>
    );
};

export default InvPmtDeclined;
