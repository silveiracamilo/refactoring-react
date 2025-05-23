import { Col, Row } from "antd";
import type { JSX } from "react";

const withTwoColumns = (leftContent: JSX.Element, rightContent: JSX.Element) => {
    return (
        <Row>
            <Col lg={24} xl={18}>
                {leftContent}
            </Col>
            <Col lg={0} xl={6}>
                {rightContent}
            </Col>
        </Row>
    );
}

export default withTwoColumns;
