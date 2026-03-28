import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List } from 'antd';

const { Text } = Typography;

type Message = {
    id: number;
    from: string;
    content: string;
    timestamp: number;
};

type ChatMediator = {
    register: (name: string) => void;
    send: (from: string, message: string) => void;
    getMessages: () => Message[];
    getUsers: () => string[];
};

const createChatMediator = (): ChatMediator => {
    const users: string[] = [];
    const messages: Message[] = [];
    let msgId = 0;

    const register = (name: string) => {
        if (!users.includes(name)) {
            users.push(name);
        }
    };

    const send = (from: string, message: string) => {
        if (!users.includes(from)) return;
        messages.push({
            id: ++msgId,
            from,
            content: message,
            timestamp: Date.now(),
        });
    };

    const getMessages = () => [...messages];
    const getUsers = () => [...users];

    return { register, send, getMessages, getUsers };
};

const ExampleMediator = () => {
    const [mediator] = useState(createChatMediator);
    const [messages, setMessages] = useState<Message[]>([]);
    const [users] = useState(() => {
        mediator.register('Alice');
        mediator.register('Bob');
        mediator.register('Carol');
        return mediator.getUsers();
    });

    const sendMessage = useCallback((from: string, content: string) => {
        mediator.send(from, content);
        setMessages(mediator.getMessages());
    }, [mediator]);

    const userMessages: Record<string, string[]> = {
        Alice: ['Olá pessoal!', 'Alguém viu o relatório?'],
        Bob: ['Oi Alice!', 'Vou verificar.'],
        Carol: ['Bom dia!', 'Já enviei o relatório.'],
    };

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Chat Room (via Mediator)</Text>
            <Text>Usuários conectados: {users.map(u => <Tag key={u} color="blue">{u}</Tag>)}</Text>

            <Space wrap>
                {users.map(user => (
                    <Space key={user} direction="vertical" size="small">
                        <Text strong>{user}:</Text>
                        {userMessages[user]?.map((msg, idx) => (
                            <Button
                                key={idx}
                                size="small"
                                onClick={() => sendMessage(user, msg)}
                            >
                                {msg}
                            </Button>
                        ))}
                    </Space>
                ))}
            </Space>

            <Button danger onClick={() => setMessages([])}>Limpar Chat</Button>

            {messages.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={messages}
                    renderItem={(msg) => (
                        <List.Item>
                            <Text>
                                <Tag color="green">{msg.from}</Tag>
                                {msg.content}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleMediator;
