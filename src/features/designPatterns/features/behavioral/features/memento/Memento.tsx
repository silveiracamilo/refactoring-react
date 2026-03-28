import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleMemento from './sample/ExampleMemento';
import { exampleMementoCode, exampleMementoRenderCode } from './sample/exampleMementoCode';

const { Title, Paragraph } = Typography;

const Memento = () => {
    return (
        <>
        <Title id='part-1'>Memento em Programação Funcional</Title>
        <Paragraph>
            O Memento é um padrão de projeto comportamental que permite salvar e restaurar o estado anterior de um objeto sem revelar os detalhes de sua implementação. No paradigma funcional, isso se traduz em criar snapshots imutáveis do estado e armazená-los em um histórico, permitindo navegar entre estados anteriores livremente.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Usa snapshots imutáveis do estado para garantir integridade dos dados salvos</li>
            <li>O histórico é uma coleção de mementos que permite navegação temporal</li>
            <li>O encapsulamento é mantido — apenas o originador sabe como criar e restaurar mementos</li>
            <li>Permite implementar undo/redo sem expor a estrutura interna do objeto</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMementoCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMementoRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleMemento />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Memento preserva o encapsulamento ao salvar/restaurar estado sem expor detalhes internos</li>
            <li>No paradigma funcional, snapshots imutáveis garantem que estados salvos não sejam corrompidos</li>
            <li>O histórico de mementos permite navegação temporal completa pelo estado da aplicação</li>
            <li>Ideal para editores de texto, ferramentas gráficas e qualquer sistema com undo/redo</li>
            <li>Combina bem com Event Sourcing e CQRS em arquiteturas mais complexas</li>
        </ol>
        </>
    )
}

export default Memento;
