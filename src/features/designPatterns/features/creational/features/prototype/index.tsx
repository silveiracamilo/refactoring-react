import { useMemo } from "react";
import Prototype from "./Prototype";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";
import TemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";

export const PrototypePage = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);

    return (
        <TemplateDesignPatterns prosCons={prosCons} sources={sources} anchors={anchors}>
            <Prototype />
        </TemplateDesignPatterns>
    );
}
