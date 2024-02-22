import { Column, Heading, Img, Row, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import CustomButton from './components/CustomButton';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const REFERRAL_EMAIL = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    const appName = config[partner].appName;

    return (
        <Template language={language} partner={partner}>
            <Heading className='text-[24px] font-normal text-center p-0 mt-[30px] mx-0 mb-4 leading-small'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName }}
                    components={{
                        brand: <span className='text-brand' />,
                    }}
                    i18nKey={'referralEmail.senderTought'}
                />
            </Heading>
            <Row className='mb-2'>
                <Column align='left'>
                    <Img src='{senderAvatar}' width='84px' height='84px' />
                </Column>
                <Column align='left' className='p-2'>
                    <Text>
                        <Trans
                            i18n={getInstanceFromLanguage(language)}
                            values={{ appName }}
                            i18nKey={'referralEmail.personalCloud'}
                        />
                    </Text>
                </Column>
            </Row>
            <Row className='mb-2'>
                <Column align='center'>
                    <Img width='80%' src='{portalUrl}/images/refer-friends/mail_invite_image.jpg' />
                </Column>
            </Row>
            <Text>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    values={{ appName }}
                    i18nKey={'referralEmail.multipleDevices'}
                />
            </Text>
            <Text>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    i18nKey={'referralEmail.usingApps'}
                />
            </Text>
            <Text>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    i18nKey={'referralEmail.share'}
                    values={{ storage: partner === 'mimedia' ? 10 : 5 }}
                />
            </Text>
            <Row>
                <Column align='center'>
                    <CustomButton href='{portalUrl}'>
                        <Trans
                            i18n={getInstanceFromLanguage(language)}
                            i18nKey={'referralEmail.letsGetStarted'}
                        />
                    </CustomButton>
                </Column>
            </Row>
        </Template>
    );
};

export default REFERRAL_EMAIL;
