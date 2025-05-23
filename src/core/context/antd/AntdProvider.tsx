import { useLanguageContext } from "../language/LanguageProvider";
import { Locales } from "@/shared/translation/i18n";
import type { Locale } from "antd/es/locale";
import { useMemo, type ReactElement } from "react";
import { ConfigProvider } from "antd";
import theme from "@/core/theme";
import ptBR from "antd/lib/locale/pt_BR";
import enUS from "antd/lib/locale/en_US";

const antdTranslations: Record<Locales, Locale> = {
    [Locales.pt]: ptBR,
    [Locales.en]: enUS,
}

const AntdProvider = ({ children }: { children: ReactElement }) => {
    const { locale } = useLanguageContext();

    const antdLocale = useMemo(() => antdTranslations[locale], [locale]);

    return (
        <ConfigProvider theme={theme} locale={antdLocale}>
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider;
