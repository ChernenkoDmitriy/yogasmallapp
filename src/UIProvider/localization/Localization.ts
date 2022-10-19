import { I18n } from 'i18n-js';
import { translations } from './translation';
import { ILocalization } from './ILocalization';
import { IRepository } from '../../repository/IRepository';
import { MobXRepository } from '../../repository/MobXRepository';
import { getLocales } from "react-native-localize";
import { IStorage, storage } from '../../../libs/storage';

class Localization implements ILocalization {
    constructor(private localizationStore: IRepository<string>, private storage: IStorage, private i18n: I18n) {
        i18n.enableFallback = true;
        i18n.translations = translations;
        this.load();
    }

    private setLocaleByDeviceLocale = () => {
        const deviceLocales = getLocales() || [];
        if (deviceLocales[0]?.languageCode === 'ru' || deviceLocales[0]?.languageCode === 'uk') {
            this.setLocale('ru');
        } else {
            this.setLocale('en');
        }
    }

    private load = () => {
        this.setLocaleByDeviceLocale();
    }

    get locales() {
        return Object.keys(this.i18n.translations);
    }

    get locale() {
        return this.localizationStore.data || 'en';
    }

    setTranslation = (translations: any) => {
        if (typeof translations === 'object' && translations) {
            this.i18n.translations = translations;
        }
    }

    t = (key: string) => {
        const locale = this.localizationStore.data;
        return this.i18n.t(key, { locale: locale });
    }

    setLocale = (locale: string) => {
        this.localizationStore.save(locale);
    }

}

const localizationStore = new MobXRepository<string>();
const i18n = new I18n();
export const localization = new Localization(localizationStore, storage, i18n);
