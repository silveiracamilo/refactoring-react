import { Menu, type MenuProps } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { siderMenuItems } from "./data";
import RouterPaths from "core/router/RouterPaths";

const SiderMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([RouterPaths.HOME]);

    useEffect(() => {
        setSelectedKeys([pathname]);
    }, [pathname]);

    const onClickMenu: MenuProps['onClick'] = useCallback((e: any) => {
        navigate(e.key);
    }, []);

    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            items={siderMenuItems}
            onClick={onClickMenu}
        />
    );
}

export default SiderMenu;
