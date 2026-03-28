import { useState, useCallback } from 'react';
import { Button, Table, Tag, Space, Typography } from 'antd';

const { Text } = Typography;

type TreeType = {
    name: string;
    color: string;
    texture: string;
};

type Tree = {
    id: number;
    x: number;
    y: number;
    type: TreeType;
};

type FlyweightStats = {
    totalTrees: number;
    uniqueTypes: number;
    reusedCount: number;
};

const createFlyweightFactory = () => {
    const cache = new Map<string, TreeType>();
    let reusedCount = 0;

    const getTreeType = (name: string, color: string, texture: string): TreeType => {
        const key = `${name}-${color}-${texture}`;
        if (cache.has(key)) {
            reusedCount++;
            return cache.get(key)!;
        }
        const treeType: TreeType = { name, color, texture };
        cache.set(key, treeType);
        return treeType;
    };

    const getStats = (totalTrees: number): FlyweightStats => ({
        totalTrees,
        uniqueTypes: cache.size,
        reusedCount,
    });

    const reset = () => {
        cache.clear();
        reusedCount = 0;
    };

    return { getTreeType, getStats, reset };
};

const treeData: Array<{ name: string; color: string; texture: string }> = [
    { name: 'Carvalho', color: '#228B22', texture: 'rugosa' },
    { name: 'Pinheiro', color: '#006400', texture: 'escamosa' },
    { name: 'Bétula', color: '#90EE90', texture: 'lisa' },
];

const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const ExampleFlyweight = () => {
    const [trees, setTrees] = useState<Tree[]>([]);
    const [stats, setStats] = useState<FlyweightStats>({ totalTrees: 0, uniqueTypes: 0, reusedCount: 0 });
    const [factory] = useState(createFlyweightFactory);

    const plantForest = useCallback(() => {
        factory.reset();
        const newTrees: Tree[] = [];
        for (let i = 0; i < 20; i++) {
            const data = treeData[randomInt(0, treeData.length - 1)]!;
            const type = factory.getTreeType(data.name, data.color, data.texture);
            newTrees.push({ id: i + 1, x: randomInt(0, 500), y: randomInt(0, 300), type });
        }
        setTrees(newTrees);
        setStats(factory.getStats(newTrees.length));
    }, [factory]);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', width: 50 },
        { title: 'X', dataIndex: 'x', key: 'x', width: 60 },
        { title: 'Y', dataIndex: 'y', key: 'y', width: 60 },
        {
            title: 'Tipo (Flyweight)',
            key: 'type',
            render: (_: unknown, record: Tree) => (
                <Tag color={record.type.color}>{record.type.name}</Tag>
            ),
        },
        {
            title: 'Textura',
            key: 'texture',
            render: (_: unknown, record: Tree) => record.type.texture,
        },
    ];

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Button type="primary" onClick={plantForest}>
                Plantar Floresta (20 árvores)
            </Button>

            {stats.totalTrees > 0 && (
                <Space direction="vertical" size="small">
                    <Text strong>Estatísticas do Flyweight:</Text>
                    <Text>Total de árvores: {stats.totalTrees}</Text>
                    <Text>Tipos criados (flyweights): {stats.uniqueTypes}</Text>
                    <Text>Tipos reutilizados: {stats.reusedCount}</Text>
                    <Text type="success">
                        Economia: {stats.totalTrees - stats.uniqueTypes} objetos de tipo evitados
                    </Text>
                </Space>
            )}

            {trees.length > 0 && (
                <Table
                    dataSource={trees}
                    columns={columns}
                    rowKey="id"
                    size="small"
                    pagination={false}
                    scroll={{ y: 300 }}
                />
            )}
        </Space>
    );
};

export default ExampleFlyweight;
