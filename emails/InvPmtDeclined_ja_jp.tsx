import { Heading, Hr, Section, Text } from '@react-email/components';
import React from 'react';
import CustomButton from './components/CustomButton';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const InvPmtDeclined = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language='ja' partner='orbic'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                {'{planDescription} の支払いが行われませんでした。'}
            </Heading>
            <Text className='mb-2'>{'{firstName} 様、'}</Text>
            <Text className='mb-2'>
                {
                    '{paymentDate} に行われた {paymentAmount} に対するあなたの支払いは、拒否されたようです。カード番号のご変更やカードの有効期限切れ、クレジットカードのキャンセル、銀行が支払いを認識せずカード決済を拒否した、などが原因として考えられます。'
                }
            </Text>
            <Text className='mb-2'>
                請求ページでカード情報をご確認いただくか、サポートチームまでご連絡ください。
                よろしくお願いいたします。
            </Text>
            <Text className='mb-2'>よろしくお願いいたします。</Text>
            <Text className='mb-2'>{config[partner].appName} チーム</Text>
            <Section className='text-center'>
                <CustomButton href='http://portal.mimedia.com/orbic' className='inline-block mr-4'>
                    課金情報を見る
                </CustomButton>
                <CustomButton href={`mailto:${config[partner].supportEmail}`}>
                    サポートに連絡する
                </CustomButton>
            </Section>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                サポート- <SupportLink link={config[partner].supportEmail} /> までご連絡ください。
            </Text>
        </Template>
    );
};

export default InvPmtDeclined;
