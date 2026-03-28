export const exampleChainOfResponsibilityCode =
`type Handler = (request: string) => { handled: boolean; handler: string };

// Cria um handler que processa ou delega ao próximo
const createHandler = (
    name: string,
    canHandle: (request: string) => boolean,
    next?: Handler
): Handler => {
    return (request: string) => {
        if (canHandle(request)) {
            return { handled: true, handler: name };
        }
        if (next) {
            return next(request);
        }
        return { handled: false, handler: 'nenhum' };
    };
};

// Montando a cadeia: Júnior → Pleno → Sênior
const seniorHandler = createHandler('Suporte Sênior', (req) => req === 'crítico');
const plenoHandler = createHandler('Suporte Pleno', (req) => req === 'complexo', seniorHandler);
const juniorHandler = createHandler('Suporte Júnior', (req) => req === 'simples', plenoHandler);

// Disparando requisições
juniorHandler('simples');   // → Suporte Júnior processou
juniorHandler('complexo');  // → Suporte Pleno processou
juniorHandler('crítico');   // → Suporte Sênior processou`;

export const exampleChainOfResponsibilityRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleChainOfResponsibility />
</div>`;
