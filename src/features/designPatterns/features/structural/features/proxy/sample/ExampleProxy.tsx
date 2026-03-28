import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List } from 'antd';

const { Text } = Typography;

type LogEntry = {
    id: number;
    action: string;
    key: string;
    source: 'service' | 'cache';
    timestamp: number;
};

type ServiceResult = {
    key: string;
    value: string;
    fetchedAt: number;
};

const createDataService = () => {
    const data: Record<string, string> = {
        'user-1': 'João Silva — Engenheiro de Software',
        'user-2': 'Maria Santos — Designer UX',
        'user-3': 'Pedro Oliveira — Product Manager',
    };

    const fetch = (key: string): ServiceResult | null => {
        const value = data[key];
        if (!value) return null;
        return { key, value, fetchedAt: Date.now() };
    };

    return { fetch };
};

const createCacheProxy = (service: ReturnType<typeof createDataService>) => {
    const cache = new Map<string, ServiceResult>();
    const logs: LogEntry[] = [];
    let logId = 0;

    const fetch = (key: string): { result: ServiceResult | null; fromCache: boolean } => {
        if (cache.has(key)) {
            logs.push({ id: ++logId, action: 'cache hit', key, source: 'cache', timestamp: Date.now() });
            return { result: cache.get(key)!, fromCache: true };
        }

        const result = service.fetch(key);
        if (result) {
            cache.set(key, result);
        }
        logs.push({ id: ++logId, action: 'cache miss', key, source: 'service', timestamp: Date.now() });
        return { result, fromCache: false };
    };

    const getLogs = () => [...logs];

    const clearCache = () => {
        cache.clear();
    };

    const getCacheSize = () => cache.size;

    return { fetch, getLogs, clearCache, getCacheSize };
};

const ExampleProxy = () => {
    const [service] = useState(createDataService);
    const [proxy] = useState(() => createCacheProxy(service));
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [lastResult, setLastResult] = useState<{ result: ServiceResult | null; fromCache: boolean } | null>(null);
    const [cacheSize, setCacheSize] = useState(0);

    const fetchViaProxy = useCallback((key: string) => {
        const response = proxy.fetch(key);
        setLastResult(response);
        setLogs(proxy.getLogs());
        setCacheSize(proxy.getCacheSize());
    }, [proxy]);

    const handleClearCache = useCallback(() => {
        proxy.clearCache();
        setCacheSize(proxy.getCacheSize());
    }, [proxy]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Space wrap>
                <Button type="primary" onClick={() => fetchViaProxy('user-1')}>Buscar User 1</Button>
                <Button type="primary" onClick={() => fetchViaProxy('user-2')}>Buscar User 2</Button>
                <Button type="primary" onClick={() => fetchViaProxy('user-3')}>Buscar User 3</Button>
                <Button danger onClick={handleClearCache}>Limpar Cache</Button>
            </Space>

            <Space direction="vertical" size="small">
                <Text strong>Cache: {cacheSize} item(s) armazenado(s)</Text>
                {lastResult && (
                    <Text>
                        Último resultado: {lastResult.result?.value ?? 'não encontrado'}{' '}
                        <Tag color={lastResult.fromCache ? 'green' : 'orange'}>
                            {lastResult.fromCache ? 'cache hit' : 'cache miss'}
                        </Tag>
                    </Text>
                )}
            </Space>

            {logs.length > 0 && (
                <List
                    size="small"
                    header={<Text strong>Log do Proxy</Text>}
                    bordered
                    dataSource={logs}
                    renderItem={(log) => (
                        <List.Item>
                            <Tag color={log.source === 'cache' ? 'green' : 'orange'}>
                                {log.action}
                            </Tag>
                            <Text code>{log.key}</Text>
                            <Text type="secondary" style={{ marginLeft: 8 }}>
                                via {log.source}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleProxy;
