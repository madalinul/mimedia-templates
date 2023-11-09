import 'i18next';
import en from './en-US.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translations';
        resources: { translations: typeof en };
    }
}
