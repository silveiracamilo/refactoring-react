import { useState, useCallback } from 'react';
import { Button, Space, Typography, Tag, List, Radio } from 'antd';

const { Text } = Typography;

type ReportSteps = {
    collectData: () => string[];
    processData: (data: string[]) => string[];
    formatOutput: (data: string[]) => string;
};

type LogEntry = {
    id: number;
    step: string;
    detail: string;
};

const generateReport = (steps: ReportSteps): { result: string; log: LogEntry[] } => {
    const log: LogEntry[] = [];
    let logId = 0;

    const raw = steps.collectData();
    log.push({ id: ++logId, step: 'Coletar Dados', detail: `${raw.length} itens coletados` });

    const processed = steps.processData(raw);
    log.push({ id: ++logId, step: 'Processar Dados', detail: `${processed.length} itens processados` });

    const result = steps.formatOutput(processed);
    log.push({ id: ++logId, step: 'Formatar Saída', detail: `Formato final gerado` });

    return { result, log };
};

const salesSteps: ReportSteps = {
    collectData: () => ['Produto A: R$100', 'Produto B: R$200', 'Produto C: R$150'],
    processData: (data) => data.map(item => item.toUpperCase()),
    formatOutput: (data) => `📊 RELATÓRIO DE VENDAS\n${data.join('\n')}\nTotal: 3 produtos`,
};

const inventorySteps: ReportSteps = {
    collectData: () => ['Item 1: 50 un', 'Item 2: 30 un', 'Item 3: 0 un', 'Item 4: 15 un'],
    processData: (data) => data.filter(item => !item.includes('0 un')),
    formatOutput: (data) => `📦 RELATÓRIO DE ESTOQUE\n${data.join('\n')}\nItens em estoque: ${data.length}`,
};

const ExampleTemplateMethod = () => {
    const [selectedReport, setSelectedReport] = useState<'sales' | 'inventory'>('sales');
    const [result, setResult] = useState<string | null>(null);
    const [log, setLog] = useState<LogEntry[]>([]);

    const handleGenerate = useCallback(() => {
        const steps = selectedReport === 'sales' ? salesSteps : inventorySteps;
        const report = generateReport(steps);
        setResult(report.result);
        setLog(report.log);
    }, [selectedReport]);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Gerador de Relatórios (Template Method)</Text>

            <Space direction="vertical" size="small">
                <Text>Tipo de relatório:</Text>
                <Radio.Group value={selectedReport} onChange={e => { setSelectedReport(e.target.value); setResult(null); setLog([]); }}>
                    <Radio.Button value="sales">Vendas</Radio.Button>
                    <Radio.Button value="inventory">Estoque</Radio.Button>
                </Radio.Group>
            </Space>

            <Button type="primary" onClick={handleGenerate}>
                Gerar Relatório
            </Button>

            {log.length > 0 && (
                <List
                    size="small"
                    bordered
                    header={<Text strong>Passos executados:</Text>}
                    dataSource={log}
                    renderItem={(entry) => (
                        <List.Item>
                            <Text>
                                <Tag color="blue">{entry.step}</Tag>
                                {entry.detail}
                            </Text>
                        </List.Item>
                    )}
                />
            )}

            {result && (
                <pre style={{ background: '#f5f5f5', padding: 12, borderRadius: 4, whiteSpace: 'pre-wrap' }}>
                    {result}
                </pre>
            )}
        </Space>
    );
};

export default ExampleTemplateMethod;
