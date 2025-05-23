import React, { useMemo } from "react";
import Builder from "./Builder";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import withTemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const BuilderPage: React.FC = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);;

    return withTemplateDesignPatterns(
        <Builder />,
        prosCons,
        sources, 
        anchors
    );
}
