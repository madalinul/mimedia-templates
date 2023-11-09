import { Heading, Hr, Text } from '@react-email/components';
import CustomLink from './components/CustomLink';
import SupportLink from './components/SupportLink';
import Template from './components/Template';
import config from './config/config';
import { EmailProps } from './config/types';

const ProductChange = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language={language} partner='orbic'>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                ストレージプランが更新されました。
            </Heading>
            <Text className='mb-2'>{'{firstName}様、'}</Text>
            <Text className='mb-2'>
                {
                    ' {firstName}様が{changeTime}に、{prevProductName}から{currProductName}アカウントにストレージプランを更新されたことが当社側にて確認されました。'
                }
                <CustomLink href='https://portal{envDomain}.mimedia.com/orbic/#/account/billing'>
                    ここをクリックすると
                </CustomLink>{' '}
                プランに関する請求の詳細が表示されます。
            </Text>
            <Text className='mb-2'>{config[partner].appName} チーム</Text>
            <Hr className='border border-solid border-[#eaeaea] my-[24px] mx-0 w-full' />
            <Text className='text-xs'>
                お客様側でこの変更を行わなかった場合、アカウントの詳細を再度ご確認いただき、不正な変更が行われたと思われる場合は、
                <SupportLink link={config[partner].supportEmail} /> までご連絡ください
            </Text>
        </Template>
    );
};

export default ProductChange;
