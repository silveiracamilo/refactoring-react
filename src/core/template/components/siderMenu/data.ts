import type { MenuProps } from "antd";
import RouterPaths from "core/router/RouterPaths";

type SiderMenuItemType = Required<MenuProps>['items'][number]

export const siderMenuItems: SiderMenuItemType[] = [
    { label: 'Home', key: RouterPaths.HOME },
    { label: 'Design Patterns', key: 'dp', children: [
        { label: 'About', key: RouterPaths.DESIGN_PATTERNS },
        { label: 'Creational', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL },
        { label: 'Structural', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL },
        { label: 'Behavioral', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL },
    ] },
];
