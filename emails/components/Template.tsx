import { Body, Container, Head, Html, Img, Section, Tailwind } from '@react-email/components';
import * as React from 'react';
import Footer from './Footer';
import partnersConfig from '../config/config';

export type Languages = 'en' | 'ja';
export type Partner = 'mimedia' | 'orbic' | 'tmcell';

export const Template = ({
    children,
    language = 'en',
    partner = 'orbic',
}: {
    children: React.ReactNode;
    language: Languages;
    partner?: Partner;
}) => {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: partnersConfig[partner].brand,
                                textDark: partnersConfig[partner].textDark,
                            },
                        },
                    },
                }}
            >
                <Body
                    className='bg-white my-auto mx-auto font-sans text-base text-neutral-500'
                    style={{ fontSize: 16 }}
                >
                    <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[565px]'>
                        <Section className='mb-[24px]'>{partnersConfig[partner].logo}</Section>
                        {children}
                    </Container>
                    <Footer partner={partner} language={language} />
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Template;
