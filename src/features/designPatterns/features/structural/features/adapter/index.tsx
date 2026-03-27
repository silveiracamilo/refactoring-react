import { useMemo } from "react";
import Adapter from "./Adapter";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import TemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const AdapterPage = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);

    return (
        <TemplateDesignPatterns prosCons={prosCons} sources={sources} anchors={anchors}>
            <Adapter />
        </TemplateDesignPatterns>
    );
}
