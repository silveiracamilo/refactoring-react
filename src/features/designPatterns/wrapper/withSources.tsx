import { Typography } from "antd";
import type { JSX } from "react";

const { Title } = Typography;

const withSources = (content: JSX.Element, sources: JSX.Element[]) => {
    return (
        <>
        {content}
        <Title level={3} id='part-7'>Fontes:</Title>
        <ol className='list-disc ml-4'>
            {sources}
        </ol>
        </>
    );
}

export default withSources;
