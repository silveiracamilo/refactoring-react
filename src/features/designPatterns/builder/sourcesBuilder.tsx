import { map } from "lodash";
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
    
    const build = () => map(sources, ({ url }, i) => (
        <li key={`source-${i}`}>
            <a href={url} target='_blank'>{url}</a>
        </li>
    ));

    return { addSource, build };
}