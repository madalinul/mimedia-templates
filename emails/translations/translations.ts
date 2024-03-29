import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Languages } from '../components/Template';
import en from './en-US.json';
import esMX from './es-MX.json';
import ja from './ja-JP.json';

const i18nEn = i18n.createInstance();

i18nEn
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            'en-US': { translations: en },
        },
        lng: 'en-US', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en-US',
        ns: 'translations',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

const i18nJa = i18n.createInstance();

i18nJa
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            'ja-JP': { translations: ja },
            'en-US': { translations: en },
        },
        lng: 'ja-JP', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en-US',
        ns: 'translations',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

const i18EsMx = i18n.createInstance();

i18EsMx
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            es: { translations: esMX },
            'en-US': { translations: en },
        },
        lng: 'es', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en-US',
        ns: 'translations',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

const instanceMap: Record<Languages, typeof i18n> = {
    en: i18nEn,
    ja: i18nJa,
    es: i18EsMx,
};

export const getInstanceFromLanguage = (language: Languages) => {
    return instanceMap[language];
};

export { i18n, i18nEn };
