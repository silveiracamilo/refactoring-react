## Context

O projeto é uma aplicação React + Vite + TypeScript que demonstra design patterns com exemplos interativos. Cada padrão estrutural segue uma estrutura consistente: componente principal, sample com exemplo funcional, builders (anchors, sources, prosCons), index com TemplateDesignPatterns, e loadable para lazy loading. Atualmente existem 6 padrões estruturais (Adapter, Bridge, Composite, Decorator, Facade, Flyweight) e o Proxy será o 7º.

## Goals / Non-Goals

**Goals:**
- Criar a feature Proxy seguindo exatamente o padrão dos outros padrões estruturais
- Incluir exemplo interativo funcional que demonstre o conceito de Proxy no paradigma funcional
- Integrar com router, menu lateral e sistema de lazy loading existentes

**Non-Goals:**
- Não implementar variações avançadas (Virtual Proxy, Remote Proxy, Protection Proxy separadamente)
- Não alterar a arquitetura existente dos padrões
- Não adicionar novas dependências

## Decisions

### 1. Estrutura de arquivos idêntica aos outros padrões
**Decisão**: Seguir exatamente a mesma estrutura de diretórios e arquivos do Flyweight e outros padrões.
**Razão**: Manter consistência facilita manutenção e navegação no projeto.

### 2. Exemplo interativo: Cache Proxy com controle de acesso
**Decisão**: O exemplo demonstrará um Proxy que adiciona caching e logging ao acessar dados de uma API simulada.
**Razão**: Caching é o caso de uso mais comum e intuitivo do Proxy no paradigma funcional, e permite demonstrar visualmente a diferença entre chamadas diretas e cacheadas.
**Alternativas**: 
- Virtual Proxy (lazy initialization) — menos visual
- Protection Proxy (controle de acesso) — mais complexo para um exemplo didático

### 3. Conteúdo em português (pt-BR)
**Decisão**: Todo o conteúdo textual em português, seguindo o padrão dos outros patterns.
**Razão**: Consistência com os padrões existentes no projeto.

## Risks / Trade-offs

- [Complexidade do exemplo] → Manter o exemplo simples e funcional, focando em caching proxy que é o mais intuitivo
- [Manutenção do menu lateral] → O menu é um array estático em `data.ts`, fácil de estender sem risco de quebrar itens existentes
