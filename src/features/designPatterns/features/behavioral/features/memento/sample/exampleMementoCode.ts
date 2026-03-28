export const exampleMementoCode =
`type Snapshot = {
    id: number;
    content: string;
    savedAt: number;
};

// Originador — cria e restaura snapshots do seu estado
const createEditor = () => {
    let content = '';
    const history: Snapshot[] = [];
    let snapshotId = 0;

    const setContent = (text: string) => { content = text; };
    const getContent = () => content;

    // Salvar memento
    const save = (): Snapshot => {
        const snapshot = { id: ++snapshotId, content, savedAt: Date.now() };
        history.push(snapshot);
        return snapshot;
    };

    // Restaurar memento
    const restore = (snapshot: Snapshot) => {
        content = snapshot.content;
    };

    const getHistory = () => [...history];

    return { setContent, getContent, save, restore, getHistory };
};

// Uso
const editor = createEditor();
editor.setContent('Versão 1');
editor.save();

editor.setContent('Versão 2');
editor.save();

editor.setContent('Versão 3');

const history = editor.getHistory();
editor.restore(history[0]); // volta para 'Versão 1'`;

export const exampleMementoRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleMemento />
</div>`;
