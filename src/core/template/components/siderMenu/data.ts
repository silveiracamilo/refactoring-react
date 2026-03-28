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
            { label: 'Composite', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_COMPOSITE },
            { label: 'Decorator', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_DECORATOR },
            { label: 'Facade', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_FACADE },
            { label: 'Flyweight', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_FLYWEIGHT },
            { label: 'Proxy', key: RouterPaths.DESIGN_PATTERNS_STRUCTURAL_PROXY },
        ] },
        { label: 'Behavioral', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL, children: [
            { label: 'Chain of Responsibility', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_CHAIN_OF_RESPONSIBILITY },
            { label: 'Command', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_COMMAND },
            { label: 'Iterator', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_ITERATOR },
            { label: 'Mediator', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_MEDIATOR },
            { label: 'Memento', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_MEMENTO },
            { label: 'Observer', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_OBSERVER },
            { label: 'State', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_STATE },
            { label: 'Strategy', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_STRATEGY },
            { label: 'Template Method', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_TEMPLATE_METHOD },
            { label: 'Visitor', key: RouterPaths.DESIGN_PATTERNS_BEHAVIORAL_VISITOR },
        ] },
    ] },
];
