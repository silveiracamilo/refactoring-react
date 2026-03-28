import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List, Input } from 'antd';

const { Text } = Typography;

type Snapshot = {
    id: number;
    content: string;
    savedAt: number;
};

const ExampleMemento = () => {
    const [content, setContent] = useState('');
    const [history, setHistory] = useState<Snapshot[]>([]);
    const [snapshotId, setSnapshotId] = useState(0);

    const saveSnapshot = useCallback(() => {
        const newId = snapshotId + 1;
        setSnapshotId(newId);
        setHistory(prev => [...prev, { id: newId, content, savedAt: Date.now() }]);
    }, [content, snapshotId]);

    const restoreSnapshot = useCallback((snapshot: Snapshot) => {
        setContent(snapshot.content);
    }, []);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Editor de Texto com Memento</Text>

            <Input.TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Digite algo aqui..."
                rows={3}
            />

            <Space wrap>
                <Button type="primary" onClick={saveSnapshot}>
                    Salvar Snapshot
                </Button>
                <Button danger onClick={() => { setContent(''); setHistory([]); }}>
                    Limpar Tudo
                </Button>
            </Space>

            <Text>Snapshots salvos: <Tag color="blue">{history.length}</Tag></Text>

            {history.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={[...history].reverse()}
                    renderItem={(snapshot) => (
                        <List.Item
                            actions={[
                                <Button
                                    size="small"
                                    onClick={() => restoreSnapshot(snapshot)}
                                >
                                    Restaurar
                                </Button>
                            ]}
                        >
                            <Text>
                                <Tag color="green">#{snapshot.id}</Tag>
                                {snapshot.content || '(vazio)'}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleMemento;
