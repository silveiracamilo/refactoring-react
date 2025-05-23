import React, { useMemo } from "react";
import Singleton from "./Singleton";
import withTemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";

export const SingletonPage: React.FC = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);;

    return withTemplateDesignPatterns(
        <Singleton />,
        prosCons,
        sources, 
        anchors
    );
}
