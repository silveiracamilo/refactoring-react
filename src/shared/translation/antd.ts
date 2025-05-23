import type { Locale } from "antd/es/locale";
import { Locales } from "./i18n";
import ptBR from "antd/lib/locale/pt_BR";
import enUS from "antd/lib/locale/en_US";

export const antdLocaleFactory = (locale: Locales) => {
    const antdTranslations: Record<Locales, Locale> = {
        [Locales.pt]: ptBR,
        [Locales.en]: enUS,
    };
    return antdTranslations[locale];
}