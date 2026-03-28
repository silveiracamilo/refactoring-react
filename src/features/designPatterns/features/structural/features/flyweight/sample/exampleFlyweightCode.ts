export const exampleFlyweightCode =
`import { useState, useCallback } from 'react';
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

// Factory com cache (Map) — compartilha estado intrínseco
const createFlyweightFactory = () => {
    const cache = new Map<string, TreeType>();
    let reusedCount = 0;

    const getTreeType = (name: string, color: string, texture: string): TreeType => {
        const key = \`\${name}-\${color}-\${texture}\`;
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

const treeData = [
    { name: 'Carvalho', color: '#228B22', texture: 'rugosa' },
    { name: 'Pinheiro', color: '#006400', texture: 'escamosa' },
    { name: 'Bétula', color: '#90EE90', texture: 'lisa' },
];

const ExampleFlyweight = () => {
    const [trees, setTrees] = useState<Tree[]>([]);
    const [stats, setStats] = useState<FlyweightStats>({ ... });
    const [factory] = useState(createFlyweightFactory);

    const plantForest = useCallback(() => {
        factory.reset();
        const newTrees: Tree[] = [];
        for (let i = 0; i < 20; i++) {
            const data = treeData[randomInt(0, treeData.length - 1)];
            // Flyweight: reutiliza TreeType existente ou cria novo
            const type = factory.getTreeType(data.name, data.color, data.texture);
            newTrees.push({ id: i + 1, x: randomInt(0, 500), y: randomInt(0, 300), type });
        }
        setTrees(newTrees);
        setStats(factory.getStats(newTrees.length));
    }, [factory]);

    // ... render com Table + estatísticas
};`;

export const exampleFlyweightRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleFlyweight />
</div>`;
