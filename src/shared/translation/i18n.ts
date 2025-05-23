import ptMessages from "./pt.json";
import enMessages from "./en.json";

export enum Locales {
    pt = 'pt',
    en = 'en',
}

export const translationFactory = (locale: Locales) => {
    const translations: Record<Locales, Record<string, string>> = {
        [Locales.pt]: ptMessages, 
        [Locales.en]: enMessages, 
    };
    return translations[locale];
}