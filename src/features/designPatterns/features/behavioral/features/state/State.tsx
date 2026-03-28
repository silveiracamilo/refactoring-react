import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleState from './sample/ExampleState';
import { exampleStateCode, exampleStateRenderCode } from './sample/exampleStateCode';

const { Title, Paragraph } = Typography;

const State = () => {
    return (
        <>
        <Title id='part-1'>State em Programação Funcional</Title>
        <Paragraph>
            O State é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda, como se o objeto tivesse mudado de classe. No paradigma funcional, cada estado é representado por um objeto com funções que definem o comportamento específico daquele estado, e as transições substituem o objeto de estado atual.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Cada estado é um objeto com funções que definem o comportamento para aquele estado</li>
            <li>Transições de estado substituem o objeto de comportamento atual por outro</li>
            <li>Elimina condicionais complexos (if/switch) distribuindo lógica entre estados</li>
            <li>Novos estados podem ser adicionados sem modificar os existentes</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleStateCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleStateRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleState />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O State elimina condicionais complexos, distribuindo comportamento entre objetos de estado</li>
            <li>No paradigma funcional, estados são objetos com funções que definem ações e transições</li>
            <li>Facilita adicionar novos estados sem modificar os existentes (princípio aberto/fechado)</li>
            <li>Cada estado encapsula sua própria lógica de transição e comportamento</li>
            <li>Combina bem com máquinas de estado, workflows e processos com etapas definidas</li>
        </ol>
        </>
    )
}

export default State;
