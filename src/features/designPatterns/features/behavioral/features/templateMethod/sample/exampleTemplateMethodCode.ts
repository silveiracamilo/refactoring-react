export const exampleTemplateMethodCode =
`type ReportSteps = {
    collectData: () => string[];
    processData: (data: string[]) => string[];
    formatOutput: (data: string[]) => string;
};

// Template — define o esqueleto do algoritmo
const generateReport = (steps: ReportSteps): string => {
    const raw = steps.collectData();        // Passo 1: coletar
    const processed = steps.processData(raw); // Passo 2: processar
    return steps.formatOutput(processed);    // Passo 3: formatar
};

// Variação 1: Relatório de Vendas
const salesSteps: ReportSteps = {
    collectData: () => ['Produto A: R$100', 'Produto B: R$200'],
    processData: (data) => data.map(item => item.toUpperCase()),
    formatOutput: (data) => \`VENDAS:\\n\${data.join('\\n')}\`,
};

// Variação 2: Relatório de Estoque
const inventorySteps: ReportSteps = {
    collectData: () => ['Item 1: 50 un', 'Item 2: 0 un', 'Item 3: 15 un'],
    processData: (data) => data.filter(item => !item.includes('0 un')),
    formatOutput: (data) => \`ESTOQUE:\\n\${data.join('\\n')}\`,
};

// Mesmo template, passos diferentes
generateReport(salesSteps);      // relatório de vendas
generateReport(inventorySteps);  // relatório de estoque`;

export const exampleTemplateMethodRenderCode =
`<div className='border-1 border-blue-500 p-1'>
    <ExampleTemplateMethod />
</div>`;
