export const exampleProxyCode =
`import { useState, useCallback } from 'react';
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

// Serviço real — acessa os dados diretamente
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

// Proxy com cache — intercepta chamadas ao serviço real
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
    const clearCache = () => { cache.clear(); };
    const getCacheSize = () => cache.size;

    return { fetch, getLogs, clearCache, getCacheSize };
};

const ExampleProxy = () => {
    const [service] = useState(createDataService);
    const [proxy] = useState(() => createCacheProxy(service));
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [lastResult, setLastResult] = useState(null);
    const [cacheSize, setCacheSize] = useState(0);

    const fetchViaProxy = useCallback((key: string) => {
        const response = proxy.fetch(key);
        setLastResult(response);
        setLogs(proxy.getLogs());
        setCacheSize(proxy.getCacheSize());
    }, [proxy]);

    // ... render com botões de busca, log e estatísticas de cache
};`;

export const exampleProxyRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleProxy />
</div>`;
