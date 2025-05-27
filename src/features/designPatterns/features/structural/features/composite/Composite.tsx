import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { exampleCompositeCode, exampleCompositeRenderCode } from './sample/exampleCompositeCode';
import { ExampleComposite } from './sample/ExampleComposite';

const { Title, Paragraph } = Typography;

const Composite: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Composite em Programação Funcional</Title>
        <Paragraph>
            O Composite é um padrão de projeto estrutural que permite compor objetos em uma estrutura semelhante a uma árvore e trabalhar com eles como se fosse um objeto singular.
            O Composite se tornou uma solução bastante popular para a maioria dos problemas que exigem a construção de uma estrutura em árvore. O grande recurso do Composite é a capacidade de executar métodos recursivamente em toda a estrutura da árvore e resumir os resultados
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Estruturas de dados + funções puras</li>
            <li>Estado explícito, passado como argumento</li>
            <li>Funções puras que retornam nova árvore modificada</li>
            <li>Recursão explícita sobre a estrutura de dados</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCompositeCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCompositeRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-60'>
                <ExampleComposite />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Tratar objetos individuais e composições de objetos de forma uniforme</li>
            <li>Permite construir estruturas de árvore onde nós (composite) e folhas (leaf) compartilham a mesma interface</li>
            <li>Facilita operações recursivas como renderização, navegação, processamento ou geração de dados</li>
        </ol>
        </>
    )
}

export default Composite;