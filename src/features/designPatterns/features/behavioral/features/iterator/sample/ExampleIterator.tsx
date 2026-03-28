import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag } from 'antd';

const { Text } = Typography;

type IteratorResult<T> = {
    value: T | undefined;
    done: boolean;
};

type CollectionIterator<T> = {
    next: () => IteratorResult<T>;
    hasNext: () => boolean;
    reset: () => void;
    current: () => T | undefined;
};

const createIterator = <T,>(items: T[]): CollectionIterator<T> => {
    let index = 0;

    return {
        next: () => {
            if (index < items.length) {
                const value = items[index];
                index++;
                return { value, done: false };
            }
            return { value: undefined, done: true };
        },
        hasNext: () => index < items.length,
        reset: () => { index = 0; },
        current: () => index > 0 ? items[index - 1] : undefined,
    };
};

const playlist = ['🎵 Bohemian Rhapsody', '🎶 Imagine', '🎵 Hotel California', '🎶 Stairway to Heaven', '🎵 Hey Jude'];

const ExampleIterator = () => {
    const [iterator] = useState(() => createIterator(playlist));
    const [currentItem, setCurrentItem] = useState<string | undefined>(undefined);
    const [position, setPosition] = useState(0);
    const [isDone, setIsDone] = useState(false);

    const handleNext = useCallback(() => {
        const result = iterator.next();
        if (!result.done) {
            setCurrentItem(result.value);
            setPosition(prev => prev + 1);
            setIsDone(false);
        } else {
            setIsDone(true);
        }
    }, [iterator]);

    const handleReset = useCallback(() => {
        iterator.reset();
        setCurrentItem(undefined);
        setPosition(0);
        setIsDone(false);
    }, [iterator]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Playlist Iterator</Text>
            <Space wrap>
                <Button type="primary" onClick={handleNext} disabled={isDone}>
                    Próxima Música
                </Button>
                <Button onClick={handleReset}>
                    Reiniciar
                </Button>
            </Space>

            <Space direction="vertical" size="small">
                <Text>
                    Posição: <Tag color="blue">{position}/{playlist.length}</Tag>
                </Text>
                {currentItem && (
                    <Text>
                        Tocando agora: <Tag color="green">{currentItem}</Tag>
                    </Text>
                )}
                {isDone && (
                    <Tag color="red">Playlist finalizada!</Tag>
                )}
            </Space>

            <Space direction="vertical" size="small">
                <Text strong>Playlist completa:</Text>
                {playlist.map((item, idx) => (
                    <Text key={idx}>
                        <Tag color={idx < position ? 'green' : 'default'}>
                            {idx + 1}. {item}
                        </Tag>
                    </Text>
                ))}
            </Space>
        </Space>
    );
};

export default ExampleIterator;
