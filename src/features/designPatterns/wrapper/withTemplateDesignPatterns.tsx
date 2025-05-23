import type { IAnchor } from "../builder/anchorsBuilder";
import withTwoColumns from "./withTwoColumns";
import type { JSX } from "react";
import withProsCons from "./withProsCons";
import type { IProsCons } from "../builder/prosConsBuilder";
import withSources from "./withSources";
import { Anchor } from "antd";

const withTemplateDesignPatterns = (content:JSX.Element, prosCons: IProsCons, sources: JSX.Element[], anchors: IAnchor[] = []) => {
    return withTwoColumns(
        withSources(
            withProsCons(content, prosCons),
            sources
        ),
        <Anchor items={anchors} />
    );
}

export default withTemplateDesignPatterns;
