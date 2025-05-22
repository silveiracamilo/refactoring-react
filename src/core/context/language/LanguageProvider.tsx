import { createContext, useContext, useMemo, useState, type ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { Locales, type LocalesType, translations } from "@/shared/translation/i18n";

interface ILanguageContext {
    locale: LocalesType
    setLocale: React.Dispatch<React.SetStateAction<LocalesType>>
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguageContext must be used within an LanguageProvider");
    }
    return context;
}

const LanguageProvider = ({ children }: { children: ReactElement }) => {
    const [locale, setLocale] = useState<LocalesType>(Locales.pt);

    const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);

    return (
        <IntlProvider
            locale={locale}
            key={locale}
            messages={translations[locale]}
        >
            <LanguageContext value={contextValue}>
                {children}
            </LanguageContext>
        </IntlProvider>
    )
}

export default LanguageProvider;
