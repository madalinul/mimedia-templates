import { Column, Img, Row, Text } from '@react-email/components';
import { Partner } from '../components/Template';

const orbicConfig: PartnerConfig = {
    appName: 'Orbic Cloud',
    supportEmail: 'cloudsupport@orbic.us',
    brand: '#0a2240',
    textDark: '#444646',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/orbic-logo.png'}
            width='100'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

const mimediaConfig: PartnerConfig = {
    appName: 'Mimedia',
    supportEmail: 'support@mimedia.com',
    brand: '#01a19f',
    textDark: '#8f9292',
    logo: (
        <Row>
            <Column align='center' style={{verticalAlign: 'middle'}}>
                <Img
                    src={'https://portal.mimedia.com/logos/mimedia-logo.png'}
                    width='80'
                    alt='Logo'
                    className='inline-block align-bottom'
                />
                <Text className='inline-block text-3xl'><span className='text-[#01a19f]'>mi</span>media</Text>
            </Column>
        </Row>
    ),
};

const tmcellConfig: PartnerConfig = {
    ...mimediaConfig,
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/tmcell-logo.png'}
            width='100'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

type PartnerConfig = {
    appName: string;
    supportEmail: string;
    brand: string;
    textDark: string;
    logo: JSX.Element;
};

export const partnersConfig: Record<Partner, PartnerConfig> = {
    orbic: orbicConfig,
    mimedia: mimediaConfig,
    tmcell: tmcellConfig,
};

export default partnersConfig;
