import { Typography } from "antd";
import type { ReactNode } from "react";

const { Title } = Typography;

type SourcesSectionProps = {
    sources: ReactNode[]
    children: ReactNode
}

const SourcesSection = ({ children, sources }: SourcesSectionProps) => {
    return (
        <>
        {children}
        <Title level={3} id='part-7'>Fontes:</Title>
        <ol className='list-disc ml-4'>
            {sources}
        </ol>
        </>
    );
}

export default SourcesSection;
