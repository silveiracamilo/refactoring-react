## Context

O projeto possui uma estrutura padronizada para cada design pattern, com os seguintes arquivos por feature:
- `Pattern.tsx` — componente principal com conteúdo educacional
- `index.tsx` — page wrapper usando `TemplateDesignPatterns`
- `loadable.tsx` — lazy loading via `lazyLoad()`
- `build/anchorsBuild.tsx` — âncoras de navegação
- `build/sourcesBuild.tsx` — referências/fontes
- `build/prosConsBuild.tsx` — prós e contras
- `sample/` — exemplos de código funcional

Além dos arquivos da feature, é necessário registrar rota, path enum e menu item.

## Goals / Non-Goals

**Goals:**
- Criar a feature Flyweight seguindo exatamente o mesmo padrão das features existentes (Adapter, Bridge, Composite, Decorator, Facade)
- Incluir exemplo funcional do padrão Flyweight em paradigma funcional/React
- Registrar rota, path e menu lateral

**Non-Goals:**
- Não alterar a arquitetura existente ou o template de design patterns
- Não refatorar outras features existentes
- Não adicionar testes (não há testes nos padrões existentes)

## Decisions

1. **Estrutura de diretórios idêntica aos outros padrões**: Seguir `features/flyweight/` com `Flyweight.tsx`, `index.tsx`, `loadable.tsx`, `build/`, `sample/`. Rationale: consistência com o projeto existente, qualquer outra abordagem quebraria o padrão.

2. **Exemplo funcional — cache/pool de objetos compartilhados**: O Flyweight trata de compartilhar estado intrínseco entre objetos para economizar memória. O exemplo usará um factory com cache (Map) para reutilizar instâncias. Rationale: demonstra claramente o conceito central do padrão — compartilhamento de dados imutáveis.

3. **Conteúdo em português (pt-BR)**: Seguindo o padrão dos outros design patterns do projeto.

## Risks / Trade-offs

- [Baixo risco] O exemplo funcional do Flyweight pode parecer simples demais para demonstrar ganho real de memória → Mitigação: incluir contagem de instâncias criadas vs reutilizadas para tornar visível o benefício.
