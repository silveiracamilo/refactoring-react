import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleChainOfResponsibility from './sample/ExampleChainOfResponsibility';
import { exampleChainOfResponsibilityCode, exampleChainOfResponsibilityRenderCode } from './sample/exampleChainOfResponsibilityCode';

const { Title, Paragraph } = Typography;

const ChainOfResponsibility = () => {
    return (
        <>
        <Title id='part-1'>Chain of Responsibility em Programação Funcional</Title>
        <Paragraph>
            O Chain of Responsibility é um padrão de projeto comportamental que permite passar requisições ao longo de uma cadeia de handlers. Ao receber uma requisição, cada handler decide processá-la ou passá-la ao próximo handler na cadeia. No paradigma funcional, isso se traduz em compor funções que verificam condições e delegam ao próximo handler via closures.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Cada handler é uma função que recebe a requisição e uma referência ao próximo handler</li>
            <li>A cadeia é construída por composição de funções, sem hierarquia de classes</li>
            <li>Permite adicionar ou remover handlers dinamicamente sem alterar os existentes</li>
            <li>O cliente dispara a requisição sem saber qual handler vai processá-la</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleChainOfResponsibilityCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleChainOfResponsibilityRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleChainOfResponsibility />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Chain of Responsibility desacopla o remetente da requisição dos seus receptores</li>
            <li>No paradigma funcional, a cadeia é uma composição de funções puras com delegação explícita</li>
            <li>Permite construir pipelines de processamento flexíveis e extensíveis</li>
            <li>Cada handler tem responsabilidade única — processar ou delegar</li>
            <li>Combina bem com middlewares, validações em cascata e sistemas de permissões</li>
        </ol>
        </>
    )
}

export default ChainOfResponsibility;
