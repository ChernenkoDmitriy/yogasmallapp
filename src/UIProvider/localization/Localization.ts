import { I18n } from 'i18n-js';
import { translations } from './translation';
import { ILocalization } from './ILocalization';
import { IRepository } from '../../repository/IRepository';
import { MobXRepository } from '../../repository/MobXRepository';
import { IStorage, storage } from '../../../libs/storage';

class Localization implements ILocalization {
    constructor(private localizationStore: IRepository<string>, private storage: IStorage, private i18n: I18n) {
        i18n.enableFallback = true;
        i18n.translations = translations;
        this.load();
    }

    private persistLanguage = (data: string | null) => {
        if (data) {
            this.storage.set('LANGUAGE', data);
        } else {
            this.storage.remove('LANGUAGE');
        }
    }

    private load = () => {
        this.storage.get('LANGUAGE')
            .then(data => { data && this.localizationStore.save(data); })
            .catch(error => console.warn('Localization -> load: ', error));
    }

    get locales() {
        return Object.keys(i18n.translations);
    }

    get locale() {
        return this.localizationStore.data || 'ru';
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
        this.persistLanguage(locale);
    }

}

const localizationStore = new MobXRepository<string>();
const i18n = new I18n();
export const localization = new Localization(localizationStore, storage, i18n);
