import { Menu, type MenuProps } from "antd";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { siderMenuItems } from "./data";

const SiderMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const selectedKeys = [pathname];

    const onClickMenu = useCallback<NonNullable<MenuProps['onClick']>>((e) => {
        navigate(e.key);
    }, [navigate]);

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
