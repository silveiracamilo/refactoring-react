import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { exampleZombiePrototypeCode, exampleZombiePrototypeRenderCode } from './sample/exampleZombiePrototypeCode';
import ExampleZombiePrototype from './sample/ExampleZombiePrototype';

const { Title, Paragraph } = Typography;

const Prototype: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Prototype em Programação Funcional</Title>
        <Paragraph>
            O Prototype é um padrão de projeto criacional que permite criar novos objetos a partir de um objeto existente, clonando suas propriedades e comportamentos, sem depender de construção manual ou lógica repetitiva.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Em vez de usar classes e instâncias, como na programação orientada a objetos, a abordagem funcional utiliza objetos imutáveis como protótipos e funções puras para gerar cópias modificadas desses objetos</li>
            <li>Reutilização de estruturas de dados</li>
            <li>Facilita a composição</li>
            <li>Mantém a imutabilidade</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleZombiePrototypeCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleZombiePrototypeRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-60'>
                <ExampleZombiePrototype />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>React funciona naturalmente com dados imutáveis e funções puras, tornando o Prototype Pattern muito coerente nesse ecossistema</li>
            <li>O conceito é aplicável na forma de fábricas de objetos imutáveis com herança estrutural</li>
        </ol>
        </>
    )
}

export default Prototype;