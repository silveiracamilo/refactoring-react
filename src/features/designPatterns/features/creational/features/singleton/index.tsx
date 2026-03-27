import { useMemo } from "react";
import Singleton from "./Singleton";
import TemplateDesignPatterns from "@/features/designPatterns/wrapper/withTemplateDesignPatterns";
import { anchorsBuild } from "./build/anchorsBuild";
import { sourcesBuild } from "./build/sourcesBuild";
import { prosConsBuild } from "./build/prosConsBuild";

export const SingletonPage = () => {
    const anchors = useMemo(anchorsBuild, []);
    const sources = useMemo(sourcesBuild, []);
    const prosCons = useMemo(prosConsBuild, []);

    return (
        <TemplateDesignPatterns prosCons={prosCons} sources={sources} anchors={anchors}>
            <Singleton />
        </TemplateDesignPatterns>
    );
}
