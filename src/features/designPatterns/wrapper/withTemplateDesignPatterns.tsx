import type { IAnchor } from "../builder/anchorsBuilder";
import TwoColumns from "./withTwoColumns";
import type { ReactNode } from "react";
import ProsConsSection from "./withProsCons";
import type { IProsCons } from "../builder/prosConsBuilder";
import SourcesSection from "./withSources";
import { Anchor } from "antd";

type TemplateDesignPatternsProps = {
    prosCons: IProsCons
    sources: ReactNode[]
    anchors?: IAnchor[]
    children: ReactNode
}

const TemplateDesignPatterns = ({ children, prosCons, sources, anchors = [] }: TemplateDesignPatternsProps) => {
    return (
        <TwoColumns
            left={
                <SourcesSection sources={sources}>
                    <ProsConsSection prosCons={prosCons}>
                        {children}
                    </ProsConsSection>
                </SourcesSection>
            }
            right={<Anchor items={anchors} />}
        />
    );
}

export default TemplateDesignPatterns;
