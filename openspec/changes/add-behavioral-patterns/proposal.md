## Why

O projeto já possui todas as features para Creational e Structural Design Patterns, mas a categoria Behavioral ainda está vazia — apenas a página placeholder existe. Adicionar todos os 10 padrões comportamentais completa a cobertura do catálogo GoF, mantendo o projeto educacional consistente e completo.

## What Changes

- Criar 10 novas features de Behavioral Design Patterns em `src/features/designPatterns/features/behavioral/features/`:
  - Chain of Responsibility
  - Command
  - Iterator
  - Mediator
  - Memento
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor
- Cada feature segue a mesma estrutura dos padrões existentes (Structural/Creational): componente principal, index com TemplateDesignPatterns, loadable, build (anchors, prosCons, sources) e sample (exemplo interativo + código)
- Adicionar rotas no `RouterPaths.ts` e `Router.tsx` para cada padrão
- Adicionar entradas no menu lateral (`siderMenu/data.ts`) sob a categoria Behavioral

## Capabilities

### New Capabilities
- `chain-of-responsibility-page`: Página do padrão Chain of Responsibility com exemplo funcional interativo
- `command-page`: Página do padrão Command com exemplo funcional interativo
- `iterator-page`: Página do padrão Iterator com exemplo funcional interativo
- `mediator-page`: Página do padrão Mediator com exemplo funcional interativo
- `memento-page`: Página do padrão Memento com exemplo funcional interativo
- `observer-page`: Página do padrão Observer com exemplo funcional interativo
- `state-page`: Página do padrão State com exemplo funcional interativo
- `strategy-page`: Página do padrão Strategy com exemplo funcional interativo
- `template-method-page`: Página do padrão Template Method com exemplo funcional interativo
- `visitor-page`: Página do padrão Visitor com exemplo funcional interativo

### Modified Capabilities
_(nenhuma capability existente tem seus requisitos alterados)_

## Impact

- **Código**: Novas pastas em `src/features/designPatterns/features/behavioral/features/` (10 features × ~6 arquivos cada)
- **Roteamento**: `RouterPaths.ts` ganha 10 novos enum values; `Router.tsx` ganha 10 novas Routes
- **Menu**: `siderMenu/data.ts` recebe children para o item Behavioral
- **Dependências**: Nenhuma dependência externa nova — usa apenas Ant Design, React e os builders existentes do projeto
- **Bundle**: Cada feature é lazy-loaded via `loadable.tsx`, sem impacto significativo no bundle inicial
