import type { JSX } from "react";
import { Col, Row, Timeline, Typography } from "antd";
import type { IProsCons } from "../builder/prosConsBuilder";

const { Title } = Typography;

const withProsCons = (content: JSX.Element, prosCons: IProsCons) => {
    return (
        <>
        {content}
        <Title level={4} className='mb-6 mt-6' id='part-6'>
            Prós e contras
        </Title>
        <Row className='mt-6' gutter={16}>
            <Col span={12}>
                <Timeline items={prosCons.pros} />
            </Col>
            <Col span={12}>
                <Timeline items={prosCons.cons} />
            </Col>
        </Row>
        </>
    );
}

export default withProsCons;
