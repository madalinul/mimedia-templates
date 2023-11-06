import { Hr, Text, Heading } from '@react-email/components';
import React from 'react';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';

const AccountDeletedByUser = () => {
    return (
        <Template language='ja'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                お客様のアカウントが削除されました
            </Heading>
            <Text className='mb-2'>{'{firstName}様'}</Text>
            <Text className='mb-2'>
                {config.appName}のアカウントを削除されたとのこと、残念です。またのご利用をお待ち申し上げております。
            </Text>
            <Text className='mb-2'>{config.appName} チーム</Text>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                お客様側でこの変更を行わなかった場合、アカウントの詳細を再度ご確認いただき、不正な変更が行われたと思われる場合は、
                <SupportLink /> までご連絡ください
            </Text>
        </Template>
    );
};

export default AccountDeletedByUser;
