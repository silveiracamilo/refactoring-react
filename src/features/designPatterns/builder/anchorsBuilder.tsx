import { map } from "lodash";

type IAnchorInput = {
    key: string
    title: string
}

export type IAnchor = {
    href: string
} & IAnchorInput;

type IAnchorsBuilder = {
    addAnchor(key: string, title: string): IAnchorsBuilder
    build(): IAnchor[]
}

export const anchorFactory = (key: string, title: string): IAnchorInput => ({ 
    key,
    title,
});

export const anchorsBuilder = (anchors: IAnchorInput[] = []): IAnchorsBuilder => {
    const addAnchor = (key: string, title: string) => anchorsBuilder([
        ...anchors, 
        anchorFactory(key, title)
    ]);
    
    const build = (): IAnchor[] => map(anchors, ({ key, title }) => ({
        key,
        href: `#${key}`,
        title,
    }));

    return { addAnchor, build };
}