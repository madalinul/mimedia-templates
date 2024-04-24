import { Img } from '@react-email/components';
import { Partner } from '../components/Template';

const orbicConfig: PartnerConfig = {
    appName: 'Orbic Cloud',
    supportEmail: 'cloudsupport@orbic.us',
    brand: '#0a2240',
    textDark: '#444646',
    appUrl: 'https://portal.mimedia.com/orbic',
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
    appName: 'MiMedia',
    supportEmail: 'support@mimedia.com',
    brand: '#01a19f',
    textDark: '#8f9292',
    appUrl: 'https://portal.mimedia.com',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/mimedia-logo.png'}
            width='80'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

const tmcellConfig: PartnerConfig = {
    ...mimediaConfig,
    appName: 'Gallery',
    supportEmail: 'support-tmcell@mimedia.com',
    appUrl: 'https://portal.mimedia.com/tmcell',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/tmcell-logo.png'}
            width='100'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

const pcdConfig: PartnerConfig = {
    ...mimediaConfig,
    appName: 'PCD Gallery',
    supportEmail: 'support-pcd@mimedia.com',
    appUrl: 'https://portal.mimedia.com/pcd/',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/tmcell-logo.png'}
            width='100'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

const schokConfig: PartnerConfig = {
    brand: '#64A3D6',
    textDark: '#1F1F1F',
    appName: 'Gallery',
    supportEmail: 'support-schok@mimedia.com',
    appUrl: 'https://portal.mimedia.com/schok/',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/schok-logo.png'}
            width='100'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

const telcelConfig: PartnerConfig = {
    ...mimediaConfig,
    supportEmail: 'soporte-telcel@mimedia.com',
    appUrl: 'https://portal.mimedia.com/telcel/',
    logo: (
        <Img
            src={'https://portal.mimedia.com/logos/mimedia-logo.png'}
            width='80'
            alt='Logo'
            className='my-0 mx-auto'
        />
    ),
};

type PartnerConfig = {
    appName: string;
    appUrl: string;
    supportEmail: string;
    brand: string;
    textDark: string;
    logo: JSX.Element;
};

export const partnersConfig: Record<Partner, PartnerConfig> = {
    orbic: orbicConfig,
    mimedia: mimediaConfig,
    tmcell: tmcellConfig,
    pcd: pcdConfig,
    schok: schokConfig,
    telcel: telcelConfig,
};

export default partnersConfig;
