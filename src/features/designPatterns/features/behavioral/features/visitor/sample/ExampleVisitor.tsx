import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List, Radio } from 'antd';

const { Text } = Typography;

type Shape = {
    type: 'circle';
    radius: number;
} | {
    type: 'rectangle';
    width: number;
    height: number;
} | {
    type: 'triangle';
    base: number;
    height: number;
};

type ShapeVisitor = (shape: Shape) => string;

const areaVisitor: ShapeVisitor = (shape) => {
    switch (shape.type) {
        case 'circle':
            return `Círculo (r=${shape.radius}): área = ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
        case 'rectangle':
            return `Retângulo (${shape.width}x${shape.height}): área = ${(shape.width * shape.height).toFixed(2)}`;
        case 'triangle':
            return `Triângulo (b=${shape.base}, h=${shape.height}): área = ${((shape.base * shape.height) / 2).toFixed(2)}`;
    }
};

const perimeterVisitor: ShapeVisitor = (shape) => {
    switch (shape.type) {
        case 'circle':
            return `Círculo (r=${shape.radius}): perímetro = ${(2 * Math.PI * shape.radius).toFixed(2)}`;
        case 'rectangle':
            return `Retângulo (${shape.width}x${shape.height}): perímetro = ${(2 * (shape.width + shape.height)).toFixed(2)}`;
        case 'triangle':
            const hyp = Math.sqrt(shape.base ** 2 + shape.height ** 2);
            return `Triângulo (b=${shape.base}, h=${shape.height}): perímetro = ${(shape.base + shape.height + hyp).toFixed(2)}`;
    }
};

const descriptionVisitor: ShapeVisitor = (shape) => {
    switch (shape.type) {
        case 'circle':
            return `Círculo com raio ${shape.radius}`;
        case 'rectangle':
            return `Retângulo de ${shape.width} por ${shape.height}`;
        case 'triangle':
            return `Triângulo com base ${shape.base} e altura ${shape.height}`;
    }
};

const visitors: Record<string, ShapeVisitor> = {
    'Calcular Área': areaVisitor,
    'Calcular Perímetro': perimeterVisitor,
    'Descrever': descriptionVisitor,
};

const shapes: Shape[] = [
    { type: 'circle', radius: 5 },
    { type: 'rectangle', width: 4, height: 6 },
    { type: 'triangle', base: 3, height: 4 },
];

const ExampleVisitor = () => {
    const [selectedVisitor, setSelectedVisitor] = useState('Calcular Área');
    const [results, setResults] = useState<string[]>([]);

    const handleApply = useCallback(() => {
        const visitor = visitors[selectedVisitor];
        if (visitor) {
            setResults(shapes.map(shape => visitor(shape)));
        }
    }, [selectedVisitor]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Visitor para Formas Geométricas</Text>

            <Space direction="vertical" size="small">
                <Text>Formas disponíveis:</Text>
                <Space wrap>
                    {shapes.map((s, i) => (
                        <Tag key={i} color="blue">
                            {s.type === 'circle' ? `⭕ Círculo r=${s.radius}` :
                             s.type === 'rectangle' ? `▭ Retângulo ${s.width}x${s.height}` :
                             `△ Triângulo b=${s.base} h=${s.height}`}
                        </Tag>
                    ))}
                </Space>
            </Space>

            <Space direction="vertical" size="small">
                <Text>Selecione o Visitor (operação):</Text>
                <Radio.Group value={selectedVisitor} onChange={e => { setSelectedVisitor(e.target.value); setResults([]); }}>
                    {Object.keys(visitors).map(name => (
                        <Radio.Button key={name} value={name}>{name}</Radio.Button>
                    ))}
                </Radio.Group>
            </Space>

            <Button type="primary" onClick={handleApply}>
                Aplicar Visitor
            </Button>

            {results.length > 0 && (
                <List
                    size="small"
                    bordered
                    header={<Text strong>Resultados ({selectedVisitor}):</Text>}
                    dataSource={results}
                    renderItem={(result) => (
                        <List.Item>
                            <Text><Tag color="green">✓</Tag> {result}</Text>
                        </List.Item>
                    )}
                />
            )}
        </Space>
    );
};

export default ExampleVisitor;
