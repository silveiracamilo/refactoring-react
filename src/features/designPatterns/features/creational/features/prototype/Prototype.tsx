import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Anchor, Col, Row, Timeline, Typography } from 'antd';
import { exampleZombiePrototypeCode, exampleZombiePrototypeRenderCode } from './sample/exampleZombiePrototypeCode';
import ExampleZombiePrototype from './sample/ExampleZombiePrototype';

const { Title, Paragraph } = Typography;

const Prototype: React.FC = () => {
    return (
        <Row>
            <Col span={18}>
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
                <Title level={4} className='mb-6 mt-6' id='part-6'>
                    Prós e contras
                </Title>
                <Row className='mt-6' gutter={16}>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'green',
                                    children: 'Código mais declarativo e legível, a composição de dados se torna mais expressiva e fácil de entender',
                                },
                                {
                                    color: 'green',
                                    children: 'Facilidade de manutenção e extensão, adicionar novos tipos ou variações é só criar um novo objeto derivado do protótipo, sem quebrar código existente',
                                },
                                {
                                    color: 'green',
                                    children: 'Testabilidade alta, funções puras são fáceis de testar, não dependem de contexto nem estado interno',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'red',
                                    children: 'Diferente da POO, onde métodos e estados podem ser encapsulados, na abordagem funcional os dados ficam mais expostos, e o controle de acesso depende da disciplina dos desenvolvedores',
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <Title level={3} id='part-7'>Fontes:</Title>
                <ol className='list-disc ml-4'>
                    <li>
                        <a href="https://refactoring.guru/pt-br/design-patterns/prototype" target='_blank'>
                            https://refactoring.guru/pt-br/design-patterns/prototype
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

export default Prototype;