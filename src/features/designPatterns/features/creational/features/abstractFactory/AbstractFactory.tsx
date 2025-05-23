import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
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
        <>
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
        <ol className='list-disc ml-4 mb-6'>
            <li>Isolado a criação dos perfis em fábricas, deixando o componente ProfileUser desacoplado de qualquer implementação concreta</li>
            <li>As types AbstractProfile e AbstractProfileFactory protegem contra implementações inválidas, oferecendo segurança de tipo e previsibilidade</li>
            <li>Adicionar um novo perfil (ex.: GuestProfileFactory) é trivial e não exige alterar nenhum componente existente</li>
            <li>O componente ProfileUser lida apenas com renderização, enquanto a lógica de configuração (estilo, tipo, navegação) está nas fábricas</li>
            <li>Zero dependência de classes, uso de funções puras e composição funcional consistente.</li>
        </ol>
        <Title level={3} id='part-7'>Fluxograma de decisão:</Title>
        <pre>
            <code>
                {decisao}
            </code>
        </pre>
        </>
    )
}

export default AbstractFactory;