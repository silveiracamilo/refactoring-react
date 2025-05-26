import React, { useMemo } from "react";
import Bridge from "./Bridge";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import withTemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const BridgePage: React.FC = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);;

    return withTemplateDesignPatterns(
        <Bridge />,
        prosCons,
        sources, 
        anchors
    );
}
