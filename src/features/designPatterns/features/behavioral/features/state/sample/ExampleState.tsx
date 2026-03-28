import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List } from 'antd';

const { Text } = Typography;

type TrafficState = {
    name: string;
    color: string;
    action: string;
    next: () => TrafficState;
};

type LogEntry = {
    id: number;
    from: string;
    to: string;
    action: string;
};

const createGreenState = (): TrafficState => ({
    name: 'Verde',
    color: 'green',
    action: 'Veículos podem seguir',
    next: () => createYellowState(),
});

const createYellowState = (): TrafficState => ({
    name: 'Amarelo',
    color: 'orange',
    action: 'Atenção! Prepare para parar',
    next: () => createRedState(),
});

const createRedState = (): TrafficState => ({
    name: 'Vermelho',
    color: 'red',
    action: 'Veículos devem parar',
    next: () => createGreenState(),
});

const ExampleState = () => {
    const [currentState, setCurrentState] = useState<TrafficState>(createGreenState);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [logId, setLogId] = useState(0);

    const handleTransition = useCallback(() => {
        const nextState = currentState.next();
        const newId = logId + 1;
        setLogId(newId);
        setLogs(prev => [{ id: newId, from: currentState.name, to: nextState.name, action: nextState.action }, ...prev]);
        setCurrentState(nextState);
    }, [currentState, logId]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Semáforo (State Machine)</Text>

            <Space direction="vertical" size="small" align="center">
                <Tag color={currentState.color} style={{ fontSize: '1.2em', padding: '8px 16px' }}>
                    {currentState.name}
                </Tag>
                <Text>{currentState.action}</Text>
            </Space>

            <Space wrap>
                <Button type="primary" onClick={handleTransition}>
                    Próximo Estado
                </Button>
                <Button danger onClick={() => { setCurrentState(createGreenState()); setLogs([]); }}>
                    Resetar
                </Button>
            </Space>

            {logs.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={logs.slice(0, 10)}
                    renderItem={(entry) => (
                        <List.Item>
                            <Text>
                                <Tag color="default">{entry.from}</Tag>
                                →
                                <Tag color="blue">{entry.to}</Tag>
                                {entry.action}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleState;
