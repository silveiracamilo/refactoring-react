import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { exampleMediaBridgeCode, exampleMediaBridgeRenderCode } from './sample/exampleMediaBridgeCode';
import ExampleMediaBridge from './sample/ExampleMediaBridge';

const { Title, Paragraph } = Typography;

const Bridge: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Bridge em Programação Funcional</Title>
        <Paragraph>
            O Bridge é um padrão que separa a abstração de um comportamento (o que fazer) da sua implementação concreta (o como fazer), utilizando composição de funções em vez de herança. A abstração se conecta à implementação através de um contrato funcional (um tipo ou interface que define funções), permitindo que diferentes implementações sejam trocadas de forma transparente e flexível.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Usa composição de funções ou objetos de funções, nunca herança</li>
            <li>Componentes e funções recebem comportamentos como argumentos</li>
            <li>As implementações seguem uma interface funcional explícita, normalmente objetos contendo funções ou tipos (em TypeScript)</li>
            <li>A implementação é passada como uma função, closure ou objeto funcional</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMediaBridgeCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMediaBridgeRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-[50%]'>
                <ExampleMediaBridge />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Desacoplamento real e eficaz, separa completamente a abstração (o que fazer) da implementação concreta (o como fazer)</li>
            <li>Maior flexibilidade e escalabilidade, fácil de estender: adicionar novas implementações ou abstrações sem quebrar o código existente</li>
            <li>Exemplo: adicionar um useStreamRenderer() não exige mudanças no componente {'<MediaPlayer />'}</li>
            <li>Código fica mais limpo, modular e testável</li>
        </ol>
        </>
    )
}

export default Bridge;