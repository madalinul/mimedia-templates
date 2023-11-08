import { Column, Row, Section } from '@react-email/components';
import CustomLink from './CustomLink';
import { Languages } from './Template';

const Footer = ({ language }: { language: Languages }) => {
    return (
        <Section>
            <Row>
                <Column align='center'>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://portal.mimedia.com/orbic'
                    >
                        {translations[language].home}
                    </CustomLink>
                    <span className='mx-2'>|</span>
                    <CustomLink
                        className='text-brand text-sm'
                        href='https://orbic.us/pages/contact-us'
                    >
                        {translations[language].support}
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
