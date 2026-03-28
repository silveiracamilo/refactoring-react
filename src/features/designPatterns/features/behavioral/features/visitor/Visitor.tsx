import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleVisitor from './sample/ExampleVisitor';
import { exampleVisitorCode, exampleVisitorRenderCode } from './sample/exampleVisitorCode';

const { Title, Paragraph } = Typography;

const Visitor = () => {
    return (
        <>
        <Title id='part-1'>Visitor em Programação Funcional</Title>
        <Paragraph>
            O Visitor é um padrão de projeto comportamental que permite separar algoritmos dos objetos sobre os quais operam. No paradigma funcional, o visitor é uma função que recebe um elemento e executa uma operação sobre ele, permitindo adicionar novas operações sem modificar as estruturas de dados existentes.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Cada visitor é uma função que sabe operar sobre diferentes tipos de elementos</li>
            <li>Novas operações são adicionadas criando novas funções visitor, sem alterar os elementos</li>
            <li>Usa pattern matching ou type guards para despachar a operação correta por tipo</li>
            <li>Separa claramente a estrutura de dados das operações que a manipulam</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleVisitorCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleVisitorRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleVisitor />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Visitor separa algoritmos das estruturas de dados, seguindo o princípio da responsabilidade única</li>
            <li>No paradigma funcional, visitors são funções que operam sobre elementos tipados</li>
            <li>Permite adicionar novas operações sem modificar as classes/tipos existentes</li>
            <li>Ideal quando as operações mudam frequentemente mas a estrutura de dados é estável</li>
            <li>Combina bem com ASTs, compiladores, relatórios e processamento de documentos</li>
        </ol>
        </>
    )
}

export default Visitor;
