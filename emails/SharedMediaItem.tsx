import { Column, Heading, Img, Link, Row, Section, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import CustomButton from './components/CustomButton';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

export const SharedMediaItem = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Heading className='leading-8 text-[24px] font-normal text-center p-0 my-[30px] mx-0 l'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{ brand: <span className='text-brand' /> }}
                    i18nKey={'shareMediaItem.sharedWithYou'}
                />
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
                    <Trans
                        i18n={getInstanceFromLanguage(language)}
                        values={{ appName: config[partner].appName }}
                        i18nKey={'common.clickToView'}
                    />
                </CustomButton>
            </Section>
        </Template>
    );
};

export default SharedMediaItem;
