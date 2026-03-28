export const exampleStrategyCode =
`type SortStrategy = (items: number[]) => number[];

// Cada estratégia é uma função pura com a mesma assinatura
const bubbleSort: SortStrategy = (items) => {
    const arr = [...items];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
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
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
};

// Contexto — recebe a estratégia como parâmetro
const sortWith = (strategy: SortStrategy, data: number[]) => {
    return strategy(data);
};

// Uso — trocar algoritmo é passar outra função
const data = [64, 34, 25, 12, 22, 11, 90];
sortWith(bubbleSort, data);     // [11, 12, 22, 25, 34, 64, 90]
sortWith(selectionSort, data);  // [11, 12, 22, 25, 34, 64, 90]`;

export const exampleStrategyRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleStrategy />
</div>`;
