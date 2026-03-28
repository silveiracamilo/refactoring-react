import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List } from 'antd';

const { Text } = Typography;

type CommandFn = {
    execute: () => void;
    undo: () => void;
    description: string;
};

type HistoryEntry = {
    id: number;
    description: string;
    undone: boolean;
};

const createAddCommand = (
    getValue: () => number,
    setValue: (v: number) => void,
    amount: number
): CommandFn => ({
    execute: () => setValue(getValue() + amount),
    undo: () => setValue(getValue() - amount),
    description: `Adicionar ${amount}`,
});

const createMultiplyCommand = (
    getValue: () => number,
    setValue: (v: number) => void,
    factor: number
): CommandFn => ({
    execute: () => setValue(getValue() * factor),
    undo: () => setValue(getValue() / factor),
    description: `Multiplicar por ${factor}`,
});

const ExampleCommand = () => {
    const [value, setValue] = useState(0);
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [commandStack, setCommandStack] = useState<CommandFn[]>([]);
    const [entryId, setEntryId] = useState(0);

    const valueRef = { current: value };
    valueRef.current = value;

    const executeCommand = useCallback((cmd: CommandFn) => {
        cmd.execute();
        setCommandStack(prev => [...prev, cmd]);
        const newId = entryId + 1;
        setEntryId(newId);
        setHistory(prev => [...prev, { id: newId, description: cmd.description, undone: false }]);
    }, [entryId]);

    const undoLast = useCallback(() => {
        if (commandStack.length === 0) return;
        const last = commandStack[commandStack.length - 1]!;
        last.undo();
        setCommandStack(prev => prev.slice(0, -1));
        const newId = entryId + 1;
        setEntryId(newId);
        setHistory(prev => [...prev, { id: newId, description: `Desfazer: ${last.description}`, undone: true }]);
    }, [commandStack, entryId]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Valor atual: <Tag color="blue">{value}</Tag></Text>
            <Space wrap>
                <Button type="primary" onClick={() => executeCommand(createAddCommand(() => valueRef.current, setValue, 10))}>
                    +10
                </Button>
                <Button type="primary" onClick={() => executeCommand(createAddCommand(() => valueRef.current, setValue, 5))}>
                    +5
                </Button>
                <Button type="primary" onClick={() => executeCommand(createMultiplyCommand(() => valueRef.current, setValue, 2))}>
                    ×2
                </Button>
                <Button onClick={undoLast} disabled={commandStack.length === 0}>
                    Desfazer
                </Button>
                <Button danger onClick={() => { setValue(0); setHistory([]); setCommandStack([]); }}>
                    Resetar
                </Button>
            </Space>

            {history.length > 0 && (
                <List
                    size="small"
                    bordered
                    dataSource={[...history].reverse()}
                    renderItem={(entry) => (
                        <List.Item>
                            <Text>
                                <Tag color={entry.undone ? 'orange' : 'green'}>
                                    {entry.undone ? 'undo' : 'exec'}
                                </Tag>
                                {entry.description}
                            </Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleCommand;
