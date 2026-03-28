## Why

O projeto de design patterns estruturais está crescendo e o padrão Proxy ainda não foi implementado. O Proxy é um dos padrões estruturais do GoF essencial para demonstrar controle de acesso, lazy loading, logging e caching de objetos. Adicionar esse padrão completa a cobertura dos padrões estruturais clássicos no projeto.

## What Changes

- Adicionar nova feature `proxy` em `src/features/designPatterns/features/structural/features/proxy/`
- Criar componente `Proxy.tsx` com explicação do padrão no paradigma funcional
- Criar exemplo interativo demonstrando o padrão Proxy (sample)
- Criar builders (anchors, sources, prosCons) seguindo o padrão existente
- Criar `index.tsx` com `ProxyPage` usando `TemplateDesignPatterns`
- Criar `loadable.tsx` com lazy loading
- Adicionar rota `DESIGN_PATTERNS_STRUCTURAL_PROXY` em `RouterPaths.ts`
- Registrar a rota no `Router.tsx`
- Adicionar item `Proxy` no menu lateral (`siderMenu/data.ts`)

## Capabilities

### New Capabilities
- `proxy-page`: Página completa do padrão Proxy com explicação, exemplo interativo, prós/contras e fontes

### Modified Capabilities

Nenhuma capability existente é modificada.

## Impact

- **Código**: Novos arquivos em `src/features/designPatterns/features/structural/features/proxy/`
- **Router**: Nova entrada em `RouterPaths.ts` e `Router.tsx`
- **Menu**: Nova entrada no sider menu
- **Dependências**: Nenhuma nova dependência — usa apenas antd, React e componentes compartilhados existentes
