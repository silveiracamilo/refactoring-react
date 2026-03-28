import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleFlyweight from './sample/ExampleFlyweight';
import { exampleFlyweightCode, exampleFlyweightRenderCode } from './sample/exampleFlyweightCode';

const { Title, Paragraph } = Typography;

const Flyweight = () => {
    return (
        <>
        <Title id='part-1'>Flyweight em Programação Funcional</Title>
        <Paragraph>
            O Flyweight é um padrão de projeto estrutural que permite economizar memória compartilhando partes comuns do estado (estado intrínseco) entre múltiplos objetos, em vez de manter todos os dados em cada objeto individualmente. No paradigma funcional, isso se traduz em usar caches ou factories que reutilizam dados imutáveis compartilhados.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Usa um factory com cache (Map) para armazenar e reutilizar estado intrínseco compartilhado</li>
            <li>Separa estado intrínseco (compartilhável, imutável) do extrínseco (único por instância)</li>
            <li>Reduz consumo de memória quando há muitos objetos similares</li>
            <li>O cache age como pool de objetos, evitando duplicação desnecessária</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleFlyweightCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleFlyweightRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleFlyweight />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Flyweight é ideal quando há grande quantidade de objetos com dados repetidos</li>
            <li>No paradigma funcional, o cache (Map) atua como pool de flyweights compartilhados</li>
            <li>Estado intrínseco (tipo da árvore, cor, textura) é compartilhado; estado extrínseco (posição x, y) é único por instância</li>
            <li>A contagem de instâncias criadas vs reutilizadas torna visível o benefício de memória</li>
            <li>Combina bem com outros padrões como Factory e pode ser usado em caches, pools de conexão, e otimização de renderização</li>
        </ol>
        </>
    )
}

export default Flyweight;
