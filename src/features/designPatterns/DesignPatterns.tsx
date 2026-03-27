import { useIntl } from 'react-intl';

const DesignPatterns = () => {
    const intl = useIntl();

    return (
        <>
            <h1>{intl.formatMessage({ id: 'features.designPatterns.designPatterns' })}</h1>
        </>
    )
}

export default DesignPatterns;