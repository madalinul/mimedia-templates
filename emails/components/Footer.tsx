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
    if (partner === 'tmcell') {
        return <TmcellFooter language={language} />;
    }

    if (partner === 'pcd') {
        return <PcdFooter language={language} />;
    }

    if (partner === 'telcel') {
        return <TelcelFooter language={language} />;
    }

    if (partner === 'schok') {
        return (
            <Section>
                <Row>
                    <Column align='center'>TO BE DETERMINED</Column>
                </Row>
            </Section>
        );
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

const TmcellFooter = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://portal.mimedia.com/tmcell'
                    >
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.home'} />
                    </CustomLink>
                </Column>
            </Row>
        </Section>
    );
};

const PcdFooter = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://portal.mimedia.com/pcd/'
                    >
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.home'} />
                    </CustomLink>
                </Column>
            </Row>
        </Section>
    );
};

const TelcelFooter = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://portal.mimedia.com/telcel/'
                    >
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'common.home'} />
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

export default Footer;
