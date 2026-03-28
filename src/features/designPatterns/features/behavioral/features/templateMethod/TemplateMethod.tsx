import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import ExampleTemplateMethod from './sample/ExampleTemplateMethod';
import { exampleTemplateMethodCode, exampleTemplateMethodRenderCode } from './sample/exampleTemplateMethodCode';

const { Title, Paragraph } = Typography;

const TemplateMethod = () => {
    return (
        <>
        <Title id='part-1'>Template Method em Programação Funcional</Title>
        <Paragraph>
            O Template Method é um padrão de projeto comportamental que define o esqueleto de um algoritmo em uma função base e permite que subfunções sobrescrevam passos específicos sem alterar a estrutura geral. No paradigma funcional, o template é uma função de ordem superior que recebe os passos customizáveis como parâmetros.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>O esqueleto do algoritmo é uma função de ordem superior que orquestra os passos</li>
            <li>Passos customizáveis são funções injetadas como parâmetros</li>
            <li>Mantém a estrutura do algoritmo fixa enquanto permite variação nos detalhes</li>
            <li>Promove reutilização — o template é escrito uma vez e usado com diferentes passos</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleTemplateMethodCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Renders</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleTemplateMethodRenderCode} />
        </div>
        <div className='flex gap-2 mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-1'>
                <ExampleTemplateMethod />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>O Template Method fixa a estrutura do algoritmo e delega detalhes às subfunções</li>
            <li>No paradigma funcional, é uma função de ordem superior que recebe passos como parâmetros</li>
            <li>Promove reutilização do esqueleto do algoritmo com diferentes implementações de passos</li>
            <li>Evita duplicação de código ao centralizar a lógica comum no template</li>
            <li>Combina bem com pipelines de processamento, geração de relatórios e ETL</li>
        </ol>
        </>
    )
}

export default TemplateMethod;
