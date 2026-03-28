import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleObserver from './sample/ExampleObserver';
import { exampleObserverCode, exampleObserverRenderCode } from './sample/exampleObserverCode';

const { Title, Paragraph } = Typography;

const Observer = () => {
    return (
        <>
        <Title id='part-1'>Observer em Programação Funcional</Title>
        <Paragraph>
            O Observer é um padrão de projeto comportamental que define um mecanismo de subscription para notificar múltiplos objetos sobre qualquer evento que aconteça no objeto observado. No paradigma funcional, o subject mantém uma lista de callbacks (observers) e os invoca quando o estado muda, sem que os observers conheçam uns aos outros.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>O subject é uma closure que gerencia uma lista de callbacks de notificação</li>
            <li>Observers se registram via subscribe e são notificados automaticamente em mudanças</li>
            <li>Permite desinscrever observers dinamicamente, evitando memory leaks</li>
            <li>Desacopla completamente o emissor dos receptores de eventos</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleObserverCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleObserverRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleObserver />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Observer permite notificação automática de múltiplos interessados sobre mudanças de estado</li>
            <li>No paradigma funcional, callbacks registrados são invocados sem acoplamento direto</li>
            <li>O mecanismo de subscribe/unsubscribe previne memory leaks e permite controle fino</li>
            <li>É a base de muitos frameworks reativos e bibliotecas de estado (RxJS, Redux, etc.)</li>
            <li>Combina bem com event systems, pub/sub e notificações em tempo real</li>
        </ol>
        </>
    )
}

export default Observer;
