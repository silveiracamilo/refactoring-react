import React, { useMemo } from "react";
import Decorator from "./Decorator";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import withTemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const DecoratorPage: React.FC = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);;

    return withTemplateDesignPatterns(
        <Decorator />,
        prosCons,
        sources, 
        anchors
    );
}
