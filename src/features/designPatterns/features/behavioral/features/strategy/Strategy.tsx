import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleStrategy from './sample/ExampleStrategy';
import { exampleStrategyCode, exampleStrategyRenderCode } from './sample/exampleStrategyCode';

const { Title, Paragraph } = Typography;

const Strategy = () => {
    return (
        <>
        <Title id='part-1'>Strategy em Programação Funcional</Title>
        <Paragraph>
            O Strategy é um padrão de projeto comportamental que define uma família de algoritmos, coloca cada um em uma função separada e torna-os intercambiáveis. No paradigma funcional, cada estratégia é simplesmente uma função com a mesma assinatura, e o contexto recebe a função de estratégia como parâmetro.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Cada estratégia é uma função pura com a mesma assinatura</li>
            <li>O contexto aceita a estratégia como parâmetro, sem conhecer a implementação</li>
            <li>Trocar de algoritmo é tão simples quanto passar uma função diferente</li>
            <li>Facilita testes unitários — cada estratégia pode ser testada isoladamente</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleStrategyCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleStrategyRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleStrategy />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Strategy permite trocar algoritmos em tempo de execução sem alterar o código cliente</li>
            <li>No paradigma funcional, estratégias são funções de primeira classe — elegantes e concisas</li>
            <li>Elimina condicionais para seleção de algoritmo, distribuindo a lógica entre funções</li>
            <li>Cada estratégia pode ser testada e reutilizada independentemente</li>
            <li>Combina bem com ordenação, validação, cálculos de preço e qualquer lógica intercambiável</li>
        </ol>
        </>
    )
}

export default Strategy;
