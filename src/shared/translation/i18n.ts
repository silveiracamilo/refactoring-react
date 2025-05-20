import ptMessages from "./pt.json";
import enMessages from "./en.json";

export enum Locales {
    pt = 'pt',
    en = 'en',
}

export type LocalesType = keyof typeof Locales;

export const translations: Record<LocalesType, Record<string, string>> = {
    [Locales.pt]: ptMessages, 
    [Locales.en]: enMessages, 
}
