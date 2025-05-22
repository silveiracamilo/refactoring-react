import { Dropdown, Space } from "antd";
import { useIntl } from "react-intl";
import messages from "./messages";
import { useMemo } from "react";
import { useLanguageContext } from "@/core/context/language/LanguageProvider";
import { Locales } from "@/shared/translation/i18n";
import type { ItemType } from "antd/es/menu/interface";

const LanguageDropdown = () => {
    const intl = useIntl();
    const { locale, setLocale } = useLanguageContext();
    const items = useMemo((): ItemType[] => [
        {
            key: '1',
            label: 'English',
            onClick: () => setLocale(Locales.en),
        },
        {
            key: '2',
            label: 'Português',
            onClick: () => setLocale(Locales.pt),
        },
    ], []);

    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
            <Space>
                {`${intl.formatMessage(messages.language)} (${locale})`}
            </Space>
            </a>
        </Dropdown>
    )
}

export default LanguageDropdown;
