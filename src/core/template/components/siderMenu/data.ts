import type { MenuProps } from "antd";
import RouterPaths from "@/core/router/RouterPaths";

type SiderMenuItemType = Required<MenuProps>['items'][number]

export const siderMenuItems: SiderMenuItemType[] = [
    { label: 'Design Patterns', key: 'dp', children: [
        // { label: 'About', key: RouterPaths.DESIGN_PATTERNS },
        { label: 'Creational', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL, children: [
            { label: 'Factory Method', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL_FACTORY_METHOD },
            { label: 'Abstract Factory', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL_ABSTRACT_FACTORY },
            { label: 'Builder', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL_BUILDER },
            { label: 'Prototype', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL_PROTOTYPE },
            { label: 'Singleton', key: RouterPaths.DESIGN_PATTERNS_CREATIONAL_SINGLETON },
        ] },
        { label: 'Structural', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL, children:[
            { label: 'Adapter', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_ADAPTER },
            { label: 'Bridge', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_BRIDGE },
        ] },
        { label: 'Behavioral', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL },
    ] },
];
