## Context

O projeto é um site educacional de Design Patterns em React 19 + TypeScript + Vite + Ant Design. As categorias Creational (5 padrões) e Structural (7 padrões) já estão completas, cada uma seguindo uma estrutura padronizada de feature com lazy-loading. A categoria Behavioral possui apenas uma página placeholder sem sub-features.

Cada feature de design pattern segue uma estrutura consistente:
```
features/<patternName>/
├── <PatternName>.tsx      # Componente principal com conteúdo educacional
├── index.tsx              # Wrapper com TemplateDesignPatterns (anchors, sources, prosCons)
├── loadable.tsx           # Exportação lazy-load via lazyLoad()
├── build/
│   ├── anchorsBuild.tsx   # Configuração de âncoras de navegação
│   ├── prosConsBuild.tsx  # Prós e contras do padrão
│   └── sourcesBuild.tsx   # Links de referência
└── sample/
    ├── Example<Pattern>.tsx    # Componente interativo de exemplo
    └── example<Pattern>Code.ts # Código-fonte como string para SyntaxHighlight
```

Além dos arquivos de feature, cada padrão requer: rota em `RouterPaths.ts`, `Route` em `Router.tsx`, item de menu em `siderMenu/data.ts`.

## Goals / Non-Goals

**Goals:**
- Criar todas as 10 features de Behavioral Design Patterns seguindo exatamente o padrão existente
- Cada padrão deve ter um exemplo funcional interativo usando paradigma funcional (sem classes)
- Conteúdo em português brasileiro, consistente com os padrões existentes
- Integração completa com roteamento e menu lateral

**Non-Goals:**
- Não alterar a estrutura ou arquitetura existente do projeto
- Não adicionar novas dependências
- Não refatorar código existente
- Não adicionar testes automatizados (o projeto não possui suíte de testes)

## Decisions

### 1. Seguir a estrutura de feature existente exatamente
**Decisão**: Replicar a mesma estrutura de pastas e arquivos usada em Structural e Creational.
**Razão**: Consistência é mais importante que otimização neste projeto educacional. O padrão já está provado funcionar.

### 2. Exemplos no paradigma funcional
**Decisão**: Todos os exemplos usam funções e closures, sem classes — assim como nos padrões Structural e Creational existentes.
**Razão**: O projeto todo segue o paradigma funcional com React hooks. Manter consistência.

### 3. Naming conventions
**Decisão**: Pasta em camelCase (ex: `chainOfResponsibility`), componente em PascalCase (ex: `ChainOfResponsibility.tsx`), rota em kebab-case (ex: `/design-patterns/behavioral/chain-of-responsibility`).
**Razão**: Segue o padrão já estabelecido em `factoryMethod/FactoryMethod.tsx` com rota `factory-method`.

### 4. Ordem de implementação
**Decisão**: Implementar os 10 padrões em qualquer ordem, pois são independentes entre si.
**Alternativa**: Agrupar por complexidade — descartado pois todos seguem a mesma estrutura.

## Risks / Trade-offs

- **[Muitos chunks pequenos]** → 10 novos lazy-loaded chunks. Mitigação: cada chunk é pequeno (~10-20KB) e só carrega sob demanda; o Vite já tem warning de chunks >500KB que não será atingido.
- **[Conteúdo repetitivo]** → A estrutura de arquivos se repete 10 vezes. Mitigação: é intencional para o propósito educacional e mantém cada feature independente.
- **[Router.tsx crescendo]** → O arquivo de rotas já tem ~50 linhas e vai para ~60. Mitigação: aceitável para o escopo do projeto; caso cresça mais, pode-se extrair rotas por categoria.
