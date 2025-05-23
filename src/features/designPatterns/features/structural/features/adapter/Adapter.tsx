import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { ExampleOrderAdapter } from './sample/ExampleOrderAdapter';
import { exampleOrderAdapterCode, exampleOrderAdapterRenderCode } from './sample/exampleOrderAdapterCode';

const { Title, Paragraph } = Typography;

const Adapter: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Adapter em Programação Funcional</Title>
        <Paragraph>
            O Adapter é um padrão de projeto estrutural que tem como objetivo transformar a interface de um dado, serviço ou objeto, para que ele se torne compatível com outra interface que espera um formato diferente.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>O Adapter é, geralmente, uma função pura que recebe dados em um formato e retorna os mesmos dados em outro formato, sem efeitos colaterais</li>
            <li>Desacoplamento: separa a lógica de transformação da lógica de negócios e da interface.</li>
            <li>Adaptação declarativa e explícita: a transformação é claramente visível no código, muitas vezes como mapeamento direto de campos, tornando fácil entender "de onde vem e para onde vai" cada dado</li>
            <li>Imutabilidade: Não altera o dado original, sempre retorna uma nova estrutura transformada.</li>
            <li>Testabilidade: Por ser pura e determinística, é extremamente fácil de testar.</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleOrderAdapterCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleOrderAdapterRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1 w-60'>
                <ExampleOrderAdapter />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Adapter atua como um tradutor entre dois sistemas que, de outra forma, seriam incompatíveis, permitindo que trabalhem juntos sem a necessidade de alterar seus códigos originais</li>
            <li>Na prática, o Adapter encapsula a lógica de conversão, seja de nomes, estrutura de dados ou até comportamento, promovendo o desacoplamento, a reutilização e a manutenção mais fácil do código</li>
        </ol>
        </>
    )
}

export default Adapter;