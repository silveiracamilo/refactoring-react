import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import ExampleProfileFactory, { Profiles } from './sample/ExampleProfileFactory';
import { Typography } from 'antd';
import { exampleProfileFactoryCode, exampleProfileFactoryRenderCode } from './sample/exampleProfileFactoryCode';

const { Title, Paragraph } = Typography;

const FactoryMethod: React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default FactoryMethod;