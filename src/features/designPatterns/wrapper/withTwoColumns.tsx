import { Col, Row } from "antd";
import type { JSX } from "react";

const withTwoColumns = (leftContent: JSX.Element, rightContent: JSX.Element) => {
    return (
        <Row>
            <Col span={18}>
                {leftContent}
            </Col>
            <Col span={6}>
                {rightContent}
            </Col>
        </Row>
    );
}

export default withTwoColumns;
