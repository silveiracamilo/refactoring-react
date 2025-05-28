import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleReportFacade from './sample/ExampleReportFacade';
import { exampleReportFacadeCode, exampleReportFacadeRenderCode } from './sample/exampleReportFacadeCode';

const { Title, Paragraph } = Typography;

const Facade: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Facade em Programação Funcional</Title>
        <Paragraph>
            O Facade é um padrão de projeto estrutural que fornece uma interface simplificada (mas limitada) para um sistema complexo de funções, biblioteca, ou framework. Embora o Facade diminua a complexidade geral do aplicativo, também ajuda a mover dependências indesejadas para um só local
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>É um módulo ou objeto com funções puras e algumas funções que isolam efeitos colaterais</li>
            <li>Evita estado interno. Estado é passado entre funções</li>
            <li>Funções são compostas e isoladas por transformação ou efeito</li>
            <li>Usa encapsulamento via composição funcional e módulos</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleReportFacadeCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleReportFacadeRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-60'>
                <ExampleReportFacade />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Esconde detalhes internos, oferecendo uma API mais fácil de usar</li>
            <li>Separa a lógica complexa do restante do código, protegendo a camada de UI, serviços ou consumidores das mudanças internas</li>
            <li>Centraliza fluxos de negócio ou operações complexas em pontos únicos</li>
            <li>O Facade não resolve problemas internos de design ruim — ele apenas oculta a complexidade</li>
            <li>Não substitui outros padrões como Adapter, Strategy ou Composition; eles são complementares</li>
        </ol>
        </>
    )
}

export default Facade;