import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleIterator from './sample/ExampleIterator';
import { exampleIteratorCode, exampleIteratorRenderCode } from './sample/exampleIteratorCode';

const { Title, Paragraph } = Typography;

const Iterator = () => {
    return (
        <>
        <Title id='part-1'>Iterator em Programação Funcional</Title>
        <Paragraph>
            O Iterator é um padrão de projeto comportamental que permite percorrer elementos de uma coleção sem expor sua representação subjacente (lista, pilha, árvore, etc.). No paradigma funcional, o iterator é implementado como uma função que retorna um objeto com métodos next, hasNext e reset, usando closures para manter o estado de iteração.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Usa closures para manter o índice atual da iteração sem expor a estrutura da coleção</li>
            <li>Permite percorrer coleções diferentes com a mesma interface</li>
            <li>Suporta múltiplos iteradores simultâneos sobre a mesma coleção</li>
            <li>Facilita a criação de iteradores customizados (reverso, filtrado, etc.)</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleIteratorCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleIteratorRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleIterator />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Iterator abstrai a lógica de travessia, permitindo iterar sem conhecer a estrutura interna</li>
            <li>No paradigma funcional, closures mantêm o estado de iteração de forma encapsulada</li>
            <li>Permite criar diferentes estratégias de iteração (sequencial, reversa, filtrada) sobre a mesma coleção</li>
            <li>Múltiplos iteradores podem coexistir independentemente sobre a mesma coleção</li>
            <li>Combina bem com generators, streams e processamento lazy de dados</li>
        </ol>
        </>
    )
}

export default Iterator;
