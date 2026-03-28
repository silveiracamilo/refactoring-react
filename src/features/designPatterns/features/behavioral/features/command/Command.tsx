import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleCommand from './sample/ExampleCommand';
import { exampleCommandCode, exampleCommandRenderCode } from './sample/exampleCommandCode';

const { Title, Paragraph } = Typography;

const Command = () => {
    return (
        <>
        <Title id='part-1'>Command em Programação Funcional</Title>
        <Paragraph>
            O Command é um padrão de projeto comportamental que transforma uma requisição em um objeto standalone contendo toda a informação sobre a requisição. No paradigma funcional, cada comando é uma função (ou closure) que encapsula a ação e seus parâmetros, permitindo parametrizar, enfileirar, registrar e desfazer operações.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Cada comando é uma função que encapsula uma ação com execute e undo</li>
            <li>Permite construir um histórico de operações para desfazer/refazer</li>
            <li>Desacopla quem invoca a operação de quem a executa</li>
            <li>Facilita a composição de macros — sequências de comandos agrupados</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCommandCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCommandRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleCommand />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Command encapsula operações como objetos independentes, facilitando extensão e reuso</li>
            <li>No paradigma funcional, comandos são closures que mantêm referência ao receiver e parâmetros</li>
            <li>O histórico de comandos permite implementar undo/redo de forma elegante</li>
            <li>Desacopla completamente o invocador do executor da operação</li>
            <li>Combina bem com filas de tarefas, logs de auditoria e sistemas de transações</li>
        </ol>
        </>
    )
}

export default Command;
