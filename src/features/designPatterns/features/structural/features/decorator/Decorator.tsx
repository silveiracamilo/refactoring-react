import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { exampleHOCDecoratorCode, exampleHOCDecoratorRenderCode } from './sample/exampleHOCDecoratorCode';
import ExampleHOCDecotar from './sample/ExampleHOCDecotar';

const { Title, Paragraph } = Typography;

const Decorator: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Decorator em Programação Funcional</Title>
        <Paragraph>
            O Decorator é um padrão estrutural que permite adicionar novos comportamentos aos objetos dinamicamente, colocando-os dentro de objetos wrapper especiais.
            Usando decoradores, você pode agrupar objetos inúmeras vezes, pois os objetos de destino e os decoradores seguem a mesma interface. O objeto resultante terá um comportamento de empilhamento de todos os wrappers
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Substitui herança por composição</li>
            <li>O decorator funcional não altera o comportamento interno da função original</li>
            <li>Garante que a função decorada é uma nova função imutável, sem efeitos colaterais ocultos</li>
            <li>Um decorator é, tecnicamente, uma Higher Order Function</li>
            <li>Você pode encadear decorators facilmente, construindo pipelines de funções</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleHOCDecoratorCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleHOCDecoratorRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-60'>
                <ExampleHOCDecotar />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Decorator é uma extensão natural da composição funcional: É uma maneira elegante de adicionar responsabilidades ou comportamentos sem alterar a função original</li>
            <li>Favorece código mais limpo, modular e testável</li>
            <li>Alinha-se perfeitamente ao React moderno</li>
            <li>Decorators implementados como HOCs ou hooks seguem o modelo funcional e escalam melhor em apps complexos</li>
        </ol>
        </>
    )
}

export default Decorator;