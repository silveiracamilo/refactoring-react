import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, Radio } from 'antd';

const { Text } = Typography;

type SortStrategy = (items: number[]) => number[];

const bubbleSort: SortStrategy = (items) => {
    const arr = [...items];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j]! > arr[j + 1]!) {
                [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
            }
        }
    }
    return arr;
};

const selectionSort: SortStrategy = (items) => {
    const arr = [...items];
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j]! < arr[minIdx]!) minIdx = j;
        }
        if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx]!, arr[i]!];
    }
    return arr;
};

const insertionSort: SortStrategy = (items) => {
    const arr = [...items];
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]!;
        let j = i - 1;
        while (j >= 0 && arr[j]! > key) {
            arr[j + 1] = arr[j]!;
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

const strategies: Record<string, SortStrategy> = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
    'Insertion Sort': insertionSort,
};

const ExampleStrategy = () => {
    const [selectedStrategy, setSelectedStrategy] = useState('Bubble Sort');
    const [original] = useState(() => [64, 34, 25, 12, 22, 11, 90, 45]);
    const [sorted, setSorted] = useState<number[] | null>(null);

    const handleSort = useCallback(() => {
        const strategy = strategies[selectedStrategy];
        if (strategy) {
            setSorted(strategy(original));
        }
    }, [selectedStrategy, original]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Ordenação com Strategy</Text>

            <Space direction="vertical" size="small">
                <Text>Selecione o algoritmo:</Text>
                <Radio.Group value={selectedStrategy} onChange={e => { setSelectedStrategy(e.target.value); setSorted(null); }}>
                    {Object.keys(strategies).map(name => (
                        <Radio.Button key={name} value={name}>{name}</Radio.Button>
                    ))}
                </Radio.Group>
            </Space>

            <Space direction="vertical" size="small">
                <Text>Array original:</Text>
                <Space wrap>
                    {original.map((n, i) => <Tag key={i} color="default">{n}</Tag>)}
                </Space>
            </Space>

            <Button type="primary" onClick={handleSort}>
                Ordenar com {selectedStrategy}
            </Button>

            {sorted && (
                <Space direction="vertical" size="small">
                    <Text>Resultado ({selectedStrategy}):</Text>
                    <Space wrap>
                        {sorted.map((n, i) => <Tag key={i} color="green">{n}</Tag>)}
                    </Space>
                </Space>
            )}
        </Space>
    );
};

export default ExampleStrategy;
