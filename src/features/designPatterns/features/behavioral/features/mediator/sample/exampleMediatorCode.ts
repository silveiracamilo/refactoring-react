export const exampleMediatorCode =
`type Message = {
    id: number;
    from: string;
    content: string;
    timestamp: number;
};

// Mediador que centraliza comunicação entre usuários
const createChatMediator = () => {
    const users: string[] = [];
    const messages: Message[] = [];
    let msgId = 0;

    const register = (name: string) => {
        if (!users.includes(name)) {
            users.push(name);
        }
    };

    const send = (from: string, message: string) => {
        if (!users.includes(from)) return;
        messages.push({
            id: ++msgId,
            from,
            content: message,
            timestamp: Date.now(),
        });
    };

    const getMessages = () => [...messages];
    const getUsers = () => [...users];

    return { register, send, getMessages, getUsers };
};

// Uso — os usuários não se comunicam diretamente
const mediator = createChatMediator();
mediator.register('Alice');
mediator.register('Bob');

mediator.send('Alice', 'Olá Bob!');
mediator.send('Bob', 'Oi Alice!');
mediator.getMessages(); // todas as mensagens centralizadas`;

export const exampleMediatorRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleMediator />
</div>`;
