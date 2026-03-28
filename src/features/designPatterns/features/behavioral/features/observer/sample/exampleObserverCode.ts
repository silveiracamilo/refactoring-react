export const exampleObserverCode =
`type EventEmitter = {
    subscribe: (name: string, callback: (event: string) => void) => () => void;
    emit: (event: string) => void;
    getSubscribers: () => string[];
};

// Cria um event emitter funcional
const createEventEmitter = (): EventEmitter => {
    const subscribers = new Map<string, (event: string) => void>();

    const subscribe = (name: string, callback: (event: string) => void) => {
        subscribers.set(name, callback);
        return () => { subscribers.delete(name); }; // unsubscribe
    };

    const emit = (event: string) => {
        subscribers.forEach((callback) => callback(event));
    };

    const getSubscribers = () => [...subscribers.keys()];

    return { subscribe, emit, getSubscribers };
};

// Uso
const emitter = createEventEmitter();

const unsubLogger = emitter.subscribe('Logger', (e) => console.log('[LOG]', e));
emitter.subscribe('Dashboard', (e) => console.log('[DASH]', e));

emitter.emit('Usuário logou');    // Logger e Dashboard notificados
unsubLogger();                     // Logger desinscreve
emitter.emit('Pedido criado');    // Apenas Dashboard notificado`;

export const exampleObserverRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleObserver />
</div>`;
