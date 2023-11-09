import { Column, Row, Section } from '@react-email/components';
import { Trans } from 'react-i18next';
import { EmailProps } from '../config/types';
import { getInstanceFromLanguage } from '../translations/translations';
import CustomLink from './CustomLink';
import { Languages } from './Template';

const Footer = ({ language, partner }: EmailProps) => {
    if (partner === 'orbic') {
        return <OrbicFooter language={language} />;
    }
    return <MimediaFooter language={language} />;
};

const OrbicFooter = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://portal.mimedia.com/orbic'
                    >
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.home'} />
                    </CustomLink>
                    <span className='mx-2'>|</span>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://orbic.us/pages/contact-us'
                    >
                        <Trans
                            i18n={getInstanceFromLanguage(language)}
                            i18nKey={'common.support'}
                        />
                    </CustomLink>
                </Column>
            </Row>
        </Section>
    );
};

const MimediaFooter = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink className='text-brand text-sm' href='https://portal.mimedia.com/'>
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.home'} />
                    </CustomLink>
                    <span className='mx-2'>|</span>
                    <CustomLink className='text-brand text-sm' href='http://support.mimedia.com/'>
                        <Trans
                            i18n={getInstanceFromLanguage(language)}
                            i18nKey={'common.support'}
                        />
                    </CustomLink>
                    <span className='mx-2'>|</span>
                    <CustomLink
                        className='text-brand text-sm'
                        href='http://support.mimedia.com/contact-us/'
                    >
                        <Trans
                            i18n={getInstanceFromLanguage(language)}
                            i18nKey={'common.feedback'}
                        />
                    </CustomLink>
                </Column>
            </Row>
        </Section>
    );
};

const translations: Record<Languages, { home: string; support: string }> = {
    en: {
        home: 'Home',
        support: 'Support',
    },
    ja: {
        home: 'ホーム',
        support: 'サポート',
    },
};

export default Footer;
