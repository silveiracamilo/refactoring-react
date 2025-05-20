import React from 'react';
import { useIntl } from 'react-intl';

const DesignPatterns: React.FC = () => {
    const intl = useIntl();

    return (
        <>
            <h1>{intl.formatMessage({ id: 'features.designPatterns.designPatterns' })}</h1>
        </>
    )
}

export default DesignPatterns;