export const exampleStateCode =
`type TrafficState = {
    name: string;
    color: string;
    action: string;
    next: () => TrafficState;
};

// Cada estado define seu comportamento e transição
const createGreenState = (): TrafficState => ({
    name: 'Verde',
    color: 'green',
    action: 'Veículos podem seguir',
    next: () => createYellowState(),
});

const createYellowState = (): TrafficState => ({
    name: 'Amarelo',
    color: 'orange',
    action: 'Atenção! Prepare para parar',
    next: () => createRedState(),
});

const createRedState = (): TrafficState => ({
    name: 'Vermelho',
    color: 'red',
    action: 'Veículos devem parar',
    next: () => createGreenState(),
});

// Uso
let state = createGreenState();
console.log(state.name);    // Verde
console.log(state.action);  // Veículos podem seguir

state = state.next();       // Transição para Amarelo
state = state.next();       // Transição para Vermelho
state = state.next();       // Volta para Verde`;

export const exampleStateRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleState />
</div>`;
