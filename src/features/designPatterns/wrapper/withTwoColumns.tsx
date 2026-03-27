import { Col, Row } from "antd";
import type { ReactNode } from "react";

type TwoColumnsProps = {
    left: ReactNode
    right: ReactNode
}

const TwoColumns = ({ left, right }: TwoColumnsProps) => {
    return (
        <Row>
            <Col lg={24} xl={18}>
                {left}
            </Col>
            <Col lg={0} xl={6}>
                {right}
            </Col>
        </Row>
    );
}

export default TwoColumns;
