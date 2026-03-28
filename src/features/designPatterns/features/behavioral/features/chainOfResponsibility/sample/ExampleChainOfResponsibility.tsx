import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List } from 'antd';

const { Text } = Typography;

type LogEntry = {
    id: number;
    handler: string;
    action: 'processed' | 'passed';
    request: string;
};

type Handler = (request: string) => { handled: boolean; handler: string };

const createHandler = (
    name: string,
    canHandle: (request: string) => boolean,
    next?: Handler
): Handler => {
    return (request: string) => {
        if (canHandle(request)) {
            return { handled: true, handler: name };
        }
        if (next) {
            return next(request);
        }
        return { handled: false, handler: 'nenhum' };
    };
};

const ExampleChainOfResponsibility = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [logId, setLogId] = useState(0);

    const chain = useCallback(() => {
        const seniorHandler = createHandler(
            'Suporte Sênior',
            (req) => req === 'crítico'
        );

        const plenoHandler = createHandler(
            'Suporte Pleno',
            (req) => req === 'complexo',
            seniorHandler
        );

        const juniorHandler = createHandler(
            'Suporte Júnior',
            (req) => req === 'simples',
            plenoHandler
        );

        return juniorHandler;
    }, []);

    const handleRequest = useCallback((request: string) => {
        chain();
        const newId = logId + 1;
        setLogId(newId);

        const entries: LogEntry[] = [];

        if (request === 'simples') {
            entries.push({ id: newId, handler: 'Suporte Júnior', action: 'processed', request });
        } else if (request === 'complexo') {
            entries.push({ id: newId, handler: 'Suporte Júnior', action: 'passed', request });
            entries.push({ id: newId + 1, handler: 'Suporte Pleno', action: 'processed', request });
        } else if (request === 'crítico') {
            entries.push({ id: newId, handler: 'Suporte Júnior', action: 'passed', request });
            entries.push({ id: newId + 1, handler: 'Suporte Pleno', action: 'passed', request });
            entries.push({ id: newId + 2, handler: 'Suporte Sênior', action: 'processed', request });
        } else {
            entries.push({ id: newId, handler: 'nenhum', action: 'passed', request });
        }

        setLogs(prev => [...entries, ...prev]);
        setLogId(newId + entries.length);
    }, [chain, logId]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Enviar requisição de suporte:</Text>
            <Space wrap>
                <Button type="primary" onClick={() => handleRequest('simples')}>Problema Simples</Button>
                <Button type="primary" onClick={() => handleRequest('complexo')}>Problema Complexo</Button>
                <Button type="primary" onClick={() => handleRequest('crítico')}>Problema Crítico</Button>
                <Button danger onClick={() => setLogs([])}>Limpar Log</Button>
            </Space>

            {logs.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={logs}
                    renderItem={(entry) => (
                        <List.Item>
                            <Text>
                                [{entry.request}] {entry.handler}{' '}
                                <Tag color={entry.action === 'processed' ? 'green' : 'orange'}>
                                    {entry.action === 'processed' ? 'processou' : 'passou adiante'}
                                </Tag>
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleChainOfResponsibility;
