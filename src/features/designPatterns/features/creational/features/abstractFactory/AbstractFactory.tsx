import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Anchor, Col, Row, Timeline, Typography } from 'antd';
import { exampleProfileAbstractFactoryCode, exampleProfileAbstractFactoryRenderCode } from './sample/exampleProfileAbstractFactoryCode';
import ExampleProfileAbstractFactory from './sample/ExampleProfileAbstractFactory';

const { Title, Paragraph } = Typography;

const decisao = `
           ┌───────────────────────────────────────────────────────────────┐
           │ Existem múltiplas variantes com comportamentos diferentes?    │
           └───────────────────────────────────────────────────────────────┘
                                   │
                          ┌────────┴────────┐
                          │                 │
                        Sim               Não
                          │                 │
        ┌─────────────────┴─────────────────┐        ┌─────────────────────┐
        │ Essas variantes podem crescer no  │        │ Use uma simples     │
        │ futuro (adicionar novas)?         │  Não   │ função, switch ou   │
        └─────────────────┬─────────────────┘        │ mapeamento (Map)    │
                          │  Sim                     └─────────────────────┘
                          │
     ┌────────────────────┴────────────────────────┐
     │ Essas variantes compartilham uma estrutura,  │
     │ mas com detalhes (estilo, navegação, regras)?│
     └────────────────────┬────────────────────────┘
                          │  Sim
                          │
          ┌───────────────┴──────────────────────────────────────────────┐
          │ ✔️ Use Abstract Factory Funcional                            │
          │ - Garante contrato                                           │
          │ - Permite extensibilidade                                    │
          │ - Facilita regras específicas                                │
          └──────────────────────────────────────────────────────────────┘
`;

const AbstractFactory: React.FC = () => {
    return (
        <Row>
            <Col span={18}>
                <Title id='part-1'>Abstract Factory em Programação Funcional</Title>
                <Paragraph>
                    É um padrão de criação que permite gerar famílias de dados ou comportamentos relacionados através de funções de construção parametrizadas, sem acoplar o código às implementações específicas. Em vez de instanciar objetos, define-se um conjunto de funções que produzem estruturas ou comportamentos consistentes de acordo com o contexto (configuração, ambiente ou tema).
                </Paragraph>
                <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
                <ol className='list-disc ml-4'>
                    <li>Substitui classes e objetos por funções puras e closures</li>
                    <li>Cria "fábricas" de dados ou comportamentos parametrizadas</li>
                    <li>Permite trocar implementações facilmente por composição de funções</li>
                    <li>Evita efeitos colaterais, priorizando imutabilidade e transparência referencial</li>
                </ol>
                <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleProfileAbstractFactoryCode} language="typescript" />
                </div>
                <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
                <div className="flex">
                    <SyntaxHighlight code={exampleProfileAbstractFactoryRenderCode} />
                </div>
                <div className='flex mt-6 mb-6'>
                    <ExampleProfileAbstractFactory />
                </div>
                <Title level={3} id='part-5'>Conclusões:</Title>
                <ol className='list-disc ml-4'>
                    <li>Isolado a criação dos perfis em fábricas, deixando o componente ProfileUser desacoplado de qualquer implementação concreta</li>
                    <li>As interfaces AbstractProfile e AbstractProfileFactory protegem contra implementações inválidas, oferecendo segurança de tipo e previsibilidade</li>
                    <li>Adicionar um novo perfil (ex.: GuestProfileFactory) é trivial e não exige alterar nenhum componente existente</li>
                    <li>O componente ProfileUser lida apenas com renderização, enquanto a lógica de configuração (estilo, tipo, navegação) está nas fábricas</li>
                    <li>Zero dependência de classes, uso de funções puras e composição funcional consistente.</li>
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
                                    children: ' Você pode ter certeza que os perfis que você obtém de uma fábrica são compatíveis entre si',
                                },
                                {
                                    color: 'green',
                                    children: 'Você evita um vínculo forte entre perfis concretos e o código cliente',
                                },
                                {
                                    color: 'green',
                                    children: ' Princípio de responsabilidade única. Você pode extrair o código de criação do perfil para um lugar, fazendo o código ser de fácil manutenção',
                                },
                                {
                                    color: 'green',
                                    children: 'Princípio aberto/fechado. Você pode introduzir novos tipos de perfis no programa sem quebrar o código cliente existente',
                                },
                                {
                                    color: 'green',
                                    children: 'Inversão de dependências a navegação (navigate) não está acoplada à implementação (location.assign ou React Router), tornando o código adaptável a qualquer ambiente',
                                },
                                {
                                    color: 'green',
                                    children: 'Código escalável e de fácil teste',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <Timeline
                            items={[
                                {
                                    color: 'red',
                                    children: 'O código pode tornar-se mais complicado do que deveria ser, uma vez que muitas novas interfaces e funções são introduzidas junto com o padrão',
                                },
                                {
                                    color: 'red',
                                    children: 'Para projetos pequenos ou de baixa complexidade, pode parecer overengineering',
                                },
                                {
                                    color: 'red',
                                    children: 'Desenvolvedores menos experientes podem ter dificuldade em entender o fluxo, especialmente se não estiverem familiarizados com padrões de projeto no paradigma funcional',
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <Title level={3} id='part-7'>Fluxograma de decisão:</Title>
                <pre>
                    <code>
                        {decisao}
                    </code>
                </pre>
                <Title level={3} id='part-8'>Fontes:</Title>
                <ol className='list-disc ml-4'>
                    <li>
                        <a href="https://refactoring.guru/pt-br/design-patterns/abstract-factory" target='_blank'>
                            https://refactoring.guru/pt-br/design-patterns/abstract-factory
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
                            title: 'Abstract Factory em Programação Funcional',
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
                            title: 'Fluxograma de decisão',
                        },
                        {
                            key: 'part-8',
                            href: '#part-8',
                            title: 'Fontes',
                        },
                    ]}
                />
            </Col>
        </Row>
    )
}

export default AbstractFactory;