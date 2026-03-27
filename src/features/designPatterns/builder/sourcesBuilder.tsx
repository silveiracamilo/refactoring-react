import type { JSX } from "react";

export type ISource = {
    url: string
}

type ISourcesBuilder = {
    addSource(url: string): ISourcesBuilder
    build(): JSX.Element[]
}

export const sourceFactory = (url: string): ISource => ({ url });

export const sourcesBuilder = (sources: ISource[] = []): ISourcesBuilder => {
    const addSource = (url: string) => sourcesBuilder([...sources, sourceFactory(url)]);
    
    const build = () => sources.map(({ url }) => (
        <li key={url}>
            <a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
        </li>
    ));

    return { addSource, build };
}