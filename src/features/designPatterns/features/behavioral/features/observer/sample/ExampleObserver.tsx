import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List, Switch } from 'antd';

const { Text } = Typography;

type Notification = {
    id: number;
    observer: string;
    event: string;
    timestamp: number;
};

type EventEmitter = {
    subscribe: (name: string, callback: (event: string) => void) => () => void;
    emit: (event: string) => void;
    getSubscribers: () => string[];
};

const createEventEmitter = (): EventEmitter => {
    const subscribers = new Map<string, (event: string) => void>();

    const subscribe = (name: string, callback: (event: string) => void) => {
        subscribers.set(name, callback);
        return () => { subscribers.delete(name); };
    };

    const emit = (event: string) => {
        subscribers.forEach((callback) => callback(event));
    };

    const getSubscribers = () => [...subscribers.keys()];

    return { subscribe, emit, getSubscribers };
};

const ExampleObserver = () => {
    const [emitter] = useState(createEventEmitter);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [subscribed, setSubscribed] = useState<Record<string, boolean>>({
        'Logger': true,
        'Dashboard': true,
        'Email': true,
    });
    const [unsubscribers, setUnsubscribers] = useState<Record<string, () => void>>({});
    const notifIdRef = { current: 0 };

    const addNotification = useCallback((observer: string, event: string) => {
        notifIdRef.current += 1;
        const newId = notifIdRef.current;
        setNotifications(n => [{ id: newId, observer, event, timestamp: Date.now() }, ...n]);
    }, []);

    useState(() => {
        const unsubs: Record<string, () => void> = {};
        unsubs['Logger'] = emitter.subscribe('Logger', (e) => addNotification('Logger', e));
        unsubs['Dashboard'] = emitter.subscribe('Dashboard', (e) => addNotification('Dashboard', e));
        unsubs['Email'] = emitter.subscribe('Email', (e) => addNotification('Email', e));
        setUnsubscribers(unsubs);
    });

    const toggleSubscription = useCallback((name: string, active: boolean) => {
        if (active) {
            const unsub = emitter.subscribe(name, (e) => addNotification(name, e));
            setUnsubscribers(prev => ({ ...prev, [name]: unsub }));
        } else {
            unsubscribers[name]?.();
        }
        setSubscribed(prev => ({ ...prev, [name]: active }));
    }, [emitter, addNotification, unsubscribers]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Event Emitter (Observer)</Text>

            <Space direction="vertical" size="small">
                <Text>Observers:</Text>
                {Object.entries(subscribed).map(([name, active]) => (
                    <Space key={name}>
                        <Switch size="small" checked={active} onChange={(checked) => toggleSubscription(name, checked)} />
                        <Tag color={active ? 'green' : 'default'}>{name}</Tag>
                    </Space>
                ))}
            </Space>

            <Space wrap>
                <Button type="primary" onClick={() => emitter.emit('Usuário logou')}>Emitir: Login</Button>
                <Button type="primary" onClick={() => emitter.emit('Pedido criado')}>Emitir: Pedido</Button>
                <Button type="primary" onClick={() => emitter.emit('Pagamento confirmado')}>Emitir: Pagamento</Button>
                <Button danger onClick={() => setNotifications([])}>Limpar</Button>
            </Space>

            {notifications.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={notifications.slice(0, 20)}
                    renderItem={(n) => (
                        <List.Item>
                            <Text>
                                <Tag color="blue">{n.observer}</Tag>
                                recebeu: {n.event}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleObserver;
