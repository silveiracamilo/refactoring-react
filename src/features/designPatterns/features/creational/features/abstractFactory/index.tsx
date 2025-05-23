import React, { useMemo } from "react";
import AbstractFactory from "./AbstractFactory";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import withTemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const AbstractFactoryPage: React.FC = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);;

    return withTemplateDesignPatterns(
        <AbstractFactory />,
        prosCons,
        sources, 
        anchors
    );
}
