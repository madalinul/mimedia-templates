import { Column, Heading, Img, Row, Text } from '@react-email/components';
import { Trans } from 'react-i18next';
import CustomButton from './components/CustomButton';
import Template from './components/Template';
import { EmailProps } from './config/types';
import { getInstanceFromLanguage } from './translations/translations';

const FD_INVITE = ({ partner = 'mimedia', language = 'en' }: EmailProps) => {
    return (
        <Template language={language} partner={partner}>
            <Row>
                <Column align='center'>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '84px',
                            height: '84px',
                            verticalAlign: 'middle',
                            borderRadius: '50%',
                            margin: '0 24px 0 11px',
                            textAlign: 'center',
                            color: '#fff',
                            lineHeight: '84px',
                            fontWeight: 'bold',
                            fontSize: '42px',
                            backgroundSize: '84px 84px',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: 'url({senderAvatar})',
                        }}
                        className='bg-brand'
                    />
                </Column>
                <Column>
                    <Text className='text-lg'>{'{customMessage}'}</Text>
                </Column>
            </Row>
            <Row>
                <Column align='center'>
                    <div
                        style={{
                            maxWidth: '380px',
                            height: '350px',
                            margin: 'auto',
                            background:
                                'url(http://portal.mimedia.com/images/emails/invite/mask.png) center top',
                            verticalAlign: 'middle',
                            textAlign: 'center',
                            paddingTop: '40px',
                        }}
                    >
                        <Img
                            style={{
                                height: '300px',
                                borderRadius: '100%',
                                width: '300px',
                                display: 'inline-block',
                            }}
                            src={'{coverImage}'}
                        />
                    </div>
                </Column>
            </Row>
            <Heading className='text-[32px] font-normal text-center p-0 mt-[30px] mx-0 my-0 mb-4'>
                <Trans
                    i18n={getInstanceFromLanguage(language)}
                    components={{
                        brand: (
                            <Heading className='text-brand text-[32px] font-normal text-center p-0 my-0 mx-0 mb-[30px]' />
                        ),
                    }}
                    i18nKey={'fdInvite.youBeenInvited'}
                />
            </Heading>
            <Text className='text-lg text-center mb-6'>
                <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'fdInvite.permission'} />
            </Text>
            <Row>
                <Column align='center'>
                    <Text className='text-base'>{'{fdMembers}'}</Text>
                    <Text className='text-sm'>{'{membersJoined}'}</Text>
                    <CustomButton href='http://{joinUrl}'>
                        <Trans i18n={getInstanceFromLanguage(language)} i18nKey={'fdInvite.join'} />
                    </CustomButton>
                </Column>
            </Row>
        </Template>
    );
};

export default FD_INVITE;
