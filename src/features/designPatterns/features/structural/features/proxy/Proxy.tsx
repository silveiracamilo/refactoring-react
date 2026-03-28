import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleProxy from './sample/ExampleProxy';
import { exampleProxyCode, exampleProxyRenderCode } from './sample/exampleProxyCode';

const { Title, Paragraph } = Typography;

const Proxy = () => {
    return (
        <>
        <Title id='part-1'>Proxy em Programação Funcional</Title>
        <Paragraph>
            O Proxy é um padrão de projeto estrutural que fornece um substituto ou placeholder para outro objeto, controlando o acesso a ele. No paradigma funcional, isso se traduz em criar funções wrapper que interceptam chamadas ao serviço real, adicionando comportamentos como caching, logging ou validação de forma transparente.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Usa funções de ordem superior para interceptar e controlar o acesso ao serviço real</li>
            <li>Pode adicionar caching transparente via Map, evitando chamadas duplicadas ao serviço</li>
            <li>Permite logging e auditoria de todas as operações sem modificar o serviço original</li>
            <li>O cliente utiliza o proxy da mesma forma que usaria o serviço real (mesma interface)</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleProxyCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleProxyRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleProxy />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Proxy é ideal quando se deseja controlar o acesso a um objeto sem alterar sua implementação</li>
            <li>No paradigma funcional, o proxy é uma função que envolve o serviço real, adicionando comportamento extra</li>
            <li>O Cache Proxy evita chamadas redundantes ao armazenar resultados anteriores em um Map</li>
            <li>O log de operações torna visível a diferença entre chamadas diretas e cacheadas (cache hit vs cache miss)</li>
            <li>Combina bem com outros padrões como Decorator e pode ser usado em APIs, serviços de dados e middlewares</li>
        </ol>
        </>
    )
}

export default Proxy;
