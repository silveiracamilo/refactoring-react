export const exampleIteratorCode =
`type IteratorResult<T> = {
    value: T | undefined;
    done: boolean;
};

type CollectionIterator<T> = {
    next: () => IteratorResult<T>;
    hasNext: () => boolean;
    reset: () => void;
    current: () => T | undefined;
};

// Cria um iterator funcional sobre uma coleção
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

// Uso
const playlist = ['Bohemian Rhapsody', 'Imagine', 'Hotel California'];
const iterator = createIterator(playlist);

iterator.next(); // { value: 'Bohemian Rhapsody', done: false }
iterator.next(); // { value: 'Imagine', done: false }
iterator.next(); // { value: 'Hotel California', done: false }
iterator.next(); // { value: undefined, done: true }
iterator.reset(); // volta ao início`;

export const exampleIteratorRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleIterator />
</div>`;
