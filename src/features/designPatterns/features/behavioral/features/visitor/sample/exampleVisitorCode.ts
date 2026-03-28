export const exampleVisitorCode =
`type Shape = {
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

// Visitor 1: Calcular área
const areaVisitor: ShapeVisitor = (shape) => {
    switch (shape.type) {
        case 'circle':
            return \`Círculo: área = \${(Math.PI * shape.radius ** 2).toFixed(2)}\`;
        case 'rectangle':
            return \`Retângulo: área = \${(shape.width * shape.height).toFixed(2)}\`;
        case 'triangle':
            return \`Triângulo: área = \${((shape.base * shape.height) / 2).toFixed(2)}\`;
    }
};

// Visitor 2: Calcular perímetro
const perimeterVisitor: ShapeVisitor = (shape) => {
    switch (shape.type) {
        case 'circle':
            return \`Círculo: perímetro = \${(2 * Math.PI * shape.radius).toFixed(2)}\`;
        case 'rectangle':
            return \`Retângulo: perímetro = \${(2 * (shape.width + shape.height)).toFixed(2)}\`;
        case 'triangle':
            const hyp = Math.sqrt(shape.base ** 2 + shape.height ** 2);
            return \`Triângulo: perímetro = \${(shape.base + shape.height + hyp).toFixed(2)}\`;
    }
};

// Aplicar visitor sobre uma coleção
const shapes: Shape[] = [
    { type: 'circle', radius: 5 },
    { type: 'rectangle', width: 4, height: 6 },
];

shapes.map(areaVisitor);       // resultados de área
shapes.map(perimeterVisitor);  // resultados de perímetro`;

export const exampleVisitorRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleVisitor />
</div>`;
