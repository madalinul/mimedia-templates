import { Column, Heading, Hr, Img, Row, Section, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import CustomButton from './components/CustomButton';
import CustomLink from './components/CustomLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

export const THISDAY = ({ partner = 'mimedia', language = 'ja' }: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Heading className='text-[24px] font-normal leading-normal text-center p-0 my-[30px] mx-0'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{ brand: <span className='text-brand' /> }}
                    i18nKey={'thisDay.checkOut'}
                />
            </Heading>
            <Text className='text-[14px] leading-[24px]'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'thisDay.takeTrip'} />
            </Text>
            <Section>
                <Row>
                    <Column align='center'>
                        <Img src={'{mainImageUrl}'} />
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
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs leading-[24px]'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{
                        link1: (
                            <CustomLink
                                href={
                                    'https://portal.mimedia.com/#account/unsubscribe?emailType=this_day'
                                }
                                className='text-brand text-[12px]'
                            />
                        ),
                    }}
                    i18nKey={'common.unsubscribe'}
                />
            </Text>
        </Template>
    );
};

export default THISDAY;
