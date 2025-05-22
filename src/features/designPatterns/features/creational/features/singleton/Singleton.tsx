import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Anchor, Col, Row, Timeline, Typography } from 'antd';
import ExampleSingletonClass from './sample/ExampleSingletonClass';
import { exampleSingletonClassCode, exampleSingletonClassRenderCode } from './sample/exampleSingletonClassCode';
import ExampleSingletonClosure from './sample/ExampleSingletonClosure';
import { exampleSingletonClosureCode, exampleSingletonClosureRenderCode } from './sample/exampleSingletonClosureCode';

const { Title, Paragraph } = Typography;

const Singleton: React.FC = () => {
    return (
        <Row>
            <Col span={18}>
                <Title id='part-1'>Singleton em Programação Funcional</Title>
                <Paragraph>
                    O Singleton, na programação funcional, é um padrão que permite garantir que uma determinada função, closure ou objeto tenha apenas uma única instância ativa durante o ciclo de vida da aplicação, mantendo seu estado de forma encapsulada.
                </Paragraph>
                <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
                <ol className='list-disc ml-4'>
                    <li>O Singleton funcional é criado usando closures, que encapsulam variáveis internas</li>
                    <li>Esse encapsulamento protege o estado, permitindo acesso controlado sem exposição direta da variável</li>
                    <li>O estado interno do Singleton é imutável para quem consome, só podendo ser alterado por meio das funções expostas pela própria closure</li>
                    <li>Isso respeita os princípios do paradigma funcional de não mutabilidade direta de dados externos</li>
                    <li>Oferece um ponto de acesso global sem depender de classes ou instâncias OO</li>
                    <li>O estado interno do Singleton não é reativo nem observado pelo React</li>
                </ol>
                
                <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleSingletonClosureCode} language="typescript" />
                </div>
                <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleSingletonClosureRenderCode} />
                </div>
                <div className='flex gap-2 mt-6 mb-6'>
                    <div className='border-1 border-blue-500 p-1 w-[50%]'>
                        <ExampleSingletonClosure />
                    </div>
                </div>

                <Title level={3} id='part-3-2' className='mt-6'>Exemplo 2: Não poderia faltar com Class (me ajudou muito várias vezes em POO)</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleSingletonClassCode} language="typescript" />
                </div>
                <Title level={4} className='mt-6 mb-6' id='part-4-2'>Exemplo Renders</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleSingletonClassRenderCode} />
                </div>
                <div className='flex gap-2 mt-6 mb-6'>
                    <div className='border-1 border-blue-500 p-1 w-[50%]'>
                        <ExampleSingletonClass />
                    </div>
                </div>
                
                
                <Title level={3} id='part-5'>Conclusões:</Title>
                <ol className='list-disc ml-4'>
                    <li>O uso de Singleton em React é uma prática válida e eficiente quando há necessidade de compartilhar estado, dados ou comportamentos globais fora do ciclo natural de renderização dos componentes. Ele é especialmente útil para:
                        <ol className='list-disc ml-4'>
                            <li>Encapsular chamadas de APIs</li>
                            <li>Gerenciar contadores, caches ou instâncias únicas (como sockets, conexões WebSocket, clients, SDKs, etc.)</li>
                            <li>Evitar múltiplas inicializações de serviços externos</li>
                        </ol>
                    </li>
                    <li>No entanto, é importante entender que o Singleton não participa do ciclo reativo do React. Seu estado interno não dispara re-renderizações automaticamente, o que significa que, se você quiser refletir mudanças desse Singleton na interface, será necessário usar estratégias adicionais, como hooks personalizados (useState, useEffect) ou gerenciadores de estado global (React Context, Zustand, Jotai, etc.)</li>
                    <li>Portanto, o Singleton em React deve ser usado de forma consciente, para lidar com lógica de negócios, serviços externos e side effects, mas não deve substituir o controle de estado da UI, que deve permanecer dentro dos paradigmas reativos do React</li>
                </ol>
                <Title level={4} className='mb-6 mt-6' id='part-6'>
                    Prós e contras
                </Title>
                <Row className='mt-6' gutter={16}>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'green',
                                    children: 'Ponto Único de Acesso: Centraliza o acesso a recursos, serviços ou dados compartilhados',
                                },
                                {
                                    color: 'green',
                                    children: 'Controle de Instância: Garante que só exista uma única instância daquele recurso na aplicação',
                                },
                                {
                                    color: 'green',
                                    children: 'Redução de Sobrecarga: Evita múltiplas inicializações de recursos pesados (API clients, sockets, SDKs, caches, etc.)',
                                },
                                {
                                    color: 'green',
                                    children: 'Facilidade em Compartilhar Estado: Permite manter contadores, caches e estados compartilhados fora dos componentes React',
                                },
                                {
                                    color: 'green',
                                    children: 'Organização e Clareza: Separa responsabilidades e facilita encontrar onde um determinado serviço está implementado',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'red',
                                    children: 'Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez',
                                },
                                {
                                    color: 'red',
                                    children: ' O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do aplicação sabem muito sobre cada um',
                                },
                                {
                                    color: 'red',
                                    children: 'Dificulta Testes Unitários: Pode gerar dependências ocultas e dificuldade em fazer mocks/fakes durante testes',
                                },
                                {
                                    color: 'red',
                                    children: 'Não é trivial "resetar" um Singleton, principalmente entre ciclos de testes ou hot reloads.',
                                },
                                {
                                    color: 'red',
                                    children: 'Problemas em Ambientes Server-side: Em ambientes como Next.js (SSR), o Singleton pode causar compartilhamento indevido entre requisições se não for isolado corretamente',
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <Title level={3} id='part-7'>Fontes:</Title>
                <ol className='list-disc ml-4'>
                    <li>
                        <a href="https://refactoring.guru/pt-br/design-patterns/singleton" target='_blank'>
                            https://refactoring.guru/pt-br/design-patterns/singleton
                        </a>
                    </li>
                </ol>
            </Col>
            <Col span={6}>
                <Anchor
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: 'Factory Method em Programação Funcional',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Características no paradigma funcional',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Exemplo',
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title: 'Exemplo Renders',
                        },
                        {
                            key: 'part-3-2',
                            href: '#part-3-2',
                            title: 'Exemplo 2',
                        },
                        {
                            key: 'part-4-2',
                            href: '#part-4-2',
                            title: 'Exemplo 2 Renders',
                        },
                        {
                            key: 'part-5',
                            href: '#part-5',
                            title: 'Conclusões',
                        },
                        {
                            key: 'part-6',
                            href: '#part-6',
                            title: 'Prós e Contras',
                        },
                        {
                            key: 'part-7',
                            href: '#part-7',
                            title: 'Fontes',
                        },
                    ]}
                />
            </Col>
        </Row>
    )
}

export default Singleton;