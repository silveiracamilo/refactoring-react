export const exampleCommandCode =
`type CommandFn = {
    execute: () => void;
    undo: () => void;
    description: string;
};

// Comando para adicionar um valor
const createAddCommand = (
    getValue: () => number,
    setValue: (v: number) => void,
    amount: number
): CommandFn => ({
    execute: () => setValue(getValue() + amount),
    undo: () => setValue(getValue() - amount),
    description: \`Adicionar \${amount}\`,
});

// Comando para multiplicar
const createMultiplyCommand = (
    getValue: () => number,
    setValue: (v: number) => void,
    factor: number
): CommandFn => ({
    execute: () => setValue(getValue() * factor),
    undo: () => setValue(getValue() / factor),
    description: \`Multiplicar por \${factor}\`,
});

// Uso: executar e desfazer comandos
let value = 0;
const stack: CommandFn[] = [];

const cmd1 = createAddCommand(() => value, (v) => { value = v }, 10);
cmd1.execute();  // value = 10
stack.push(cmd1);

const cmd2 = createMultiplyCommand(() => value, (v) => { value = v }, 2);
cmd2.execute();  // value = 20
stack.push(cmd2);

// Undo
const last = stack.pop()!;
last.undo();     // value = 10`;

export const exampleCommandRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleCommand />
</div>`;
