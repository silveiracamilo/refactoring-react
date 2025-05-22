import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import ExampleProfileFactory, { Profiles } from './sample/ExampleProfileFactory';
import { Anchor, Col, Row, Timeline, Typography } from 'antd';
import { exampleProfileFactoryCode, exampleProfileFactoryRenderCode } from './sample/exampleProfileFactoryCode';

const { Title, Paragraph } = Typography;

const FactoryMethod: React.FC = () => {
    return (
        <Row>
            <Col span={18}>
                <Title id='part-1'>Factory Method em Programação Funcional</Title>
                <Paragraph>
                    É um padrão de criação de dados ou comportamentos que encapsula a lógica de construção de valores dentro de funções puras, permitindo flexibilidade e composição. Em vez de depender de herança e subclasses como na programação orientada a objetos, a abordagem funcional favorece a criação de funções que retornam diferentes variantes de dados ou comportamentos com base em parâmetros, promovendo a imutabilidade e evitando efeitos colaterais.
                </Paragraph>
                <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
                <ol className='list-disc ml-4'>
                    <li>Evita mutação de estado e efeitos colaterais</li>
                    <li>Utiliza funções puras para encapsular a criação de valores</li>
                    <li>Substitui herança por composição e uniões discriminadas</li>
                    <li>Foca na clareza e previsibilidade ao criar dados ou comportamentos</li>
                </ol>
                <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleProfileFactoryCode} language="typescript" />
                </div>
                <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleProfileFactoryRenderCode} />
                </div>
                <div className='flex gap-2 mt-6 mb-6'>
                    <div className='border-1 border-blue-500 p-2 w-40'>
                        <ExampleProfileFactory profile={Profiles.ADMIN} />
                    </div>
                    <div className='border-1 border-blue-500 p-2 w-40'>
                        <ExampleProfileFactory profile={Profiles.SELLER} />
                    </div>
                </div>
                <Title level={3} id='part-5'>Conclusões:</Title>
                <ol className='list-disc ml-4'>
                    <li>Isolado a responsabilidade de renderização de cada tipo de perfil em seu próprio componente (ProfileAdmin, ProfileBuyer, ProfileSeller)</li>
                    <li>Centralizado a lógica de decisão na profileFactory, que atua como um ponto único de mudança se a regra de qual componente deve ser renderizado mudar</li>
                    <li>Cada componente tem um único motivo para ser renderizado: o tipo de perfil</li>
                    <li>Foca na clareza e previsibilidade ao criar dados ou comportamentos</li>
                    <li>A lógica de "qual componente exibir" está em profileFactory, facilitando testes e manutenibilidade</li>
                    <li>Uso de useMemo: Evita recomputar a factory desnecessariamente e forçar renderizar novamente o componete</li>
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
                                    children: 'Você evita acoplamentos firmes entre o criador e os perfis concretos',
                                },
                                {
                                    color: 'green',
                                    children: 'Princípio de responsabilidade única. Você pode mover o código de criação do perfil para um único local do programa, facilitando a manutenção do código',
                                },
                                {
                                    color: 'green',
                                    children: 'Princípio aberto/fechado. Você pode introduzir novos tipos de perfis no programa sem quebrar o código cliente existente',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'red',
                                    children: 'O código pode se tornar mais complicado, pois você precisa introduzir muitas funções novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão em uma hierarquia existente de funções criadoras',
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <Title level={3} id='part-7'>Fontes:</Title>
                <ol className='list-disc ml-4'>
                    <li>
                        <a href="https://refactoring.guru/pt-br/design-patterns/factory-method" target='_blank'>
                            https://refactoring.guru/pt-br/design-patterns/factory-method
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tabnews.com.br/Agnos/aplicando-design-patterns-criacionais-em-componentes-react" target='_blank'>
                            https://www.tabnews.com.br/Agnos/aplicando-design-patterns-criacionais-em-componentes-react
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

export default FactoryMethod;