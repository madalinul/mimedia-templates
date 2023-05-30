import { Body, Container, Head, Html, Img, Section, Tailwind } from '@react-email/components';
import * as React from 'react';
import Footer from './Footer';

export type Languages = 'en' | 'ja';

export const Template = ({
    children,
    language = 'en',
}: {
    children: React.ReactNode;
    language: Languages;
}) => {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: '#0a2240',
                                textDark: '#444646',
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
                        <Section className='mb-[24px]'>
                            <Img
                                src='https://portal.mimedia.com/orbic/assets/orbic-logo-44ae3486.png'
                                width='100'
                                alt='Logo'
                                className='my-0 mx-auto'
                            />
                        </Section>
                        {children}
                    </Container>
                    <Footer language={language} />
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Template;
