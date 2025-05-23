import { useLanguageContext } from "../language/LanguageProvider";
import { useMemo, type ReactElement } from "react";
import { ConfigProvider } from "antd";
import theme from "@/core/theme";
import { antdLocaleFactory } from "@/shared/translation/antd";

const AntdProvider = ({ children }: { children: ReactElement }) => {
    const { locale } = useLanguageContext();

    const antdLocale = useMemo(() => antdLocaleFactory(locale), [locale]);

    return (
        <ConfigProvider theme={theme} locale={antdLocale}>
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider;
