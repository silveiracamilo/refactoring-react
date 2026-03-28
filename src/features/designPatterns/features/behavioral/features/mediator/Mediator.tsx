import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleMediator from './sample/ExampleMediator';
import { exampleMediatorCode, exampleMediatorRenderCode } from './sample/exampleMediatorCode';

const { Title, Paragraph } = Typography;

const Mediator = () => {
    return (
        <>
        <Title id='part-1'>Mediator em Programação Funcional</Title>
        <Paragraph>
            O Mediator é um padrão de projeto comportamental que reduz dependências caóticas entre objetos, restringindo comunicação direta entre eles e forçando a colaboração apenas via um objeto mediador. No paradigma funcional, o mediador é uma função que centraliza a comunicação, recebendo e distribuindo mensagens entre os participantes por meio de callbacks registrados.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>O mediador centraliza toda a lógica de comunicação entre componentes</li>
            <li>Os componentes não se conhecem diretamente — comunicam-se apenas via mediador</li>
            <li>Usa callbacks e closures para registrar e notificar participantes</li>
            <li>Reduz o acoplamento entre módulos, facilitando testes e manutenção</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMediatorCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMediatorRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleMediator />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Mediator centraliza a comunicação, eliminando referências diretas entre componentes</li>
            <li>No paradigma funcional, o mediador é uma closure que gerencia registro e despacho de mensagens</li>
            <li>Reduz significativamente o acoplamento em sistemas com muitos componentes interagindo</li>
            <li>Facilita a adição de novos participantes sem modificar os existentes</li>
            <li>Combina bem com chat rooms, sistemas de notificação e orquestradores de workflow</li>
        </ol>
        </>
    )
}

export default Mediator;
