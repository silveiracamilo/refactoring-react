## Why

O projeto documenta e implementa exemplos de Design Patterns em React com paradigma funcional. A categoria Structural já possui Adapter, Bridge, Composite, Decorator e Facade. O Flyweight é o próximo padrão estrutural a ser adicionado, completando a cobertura dessa categoria.

## What Changes

- Adicionar nova feature `flyweight` em `src/features/designPatterns/features/structural/features/flyweight/`
- Criar componente principal `Flyweight.tsx` com conteúdo educacional sobre o padrão Flyweight no paradigma funcional
- Criar arquivos de build (`anchorsBuild`, `sourcesBuild`, `prosConsBuild`)
- Criar exemplo funcional de código (`sample/`)
- Criar arquivos de rota: `index.tsx`, `loadable.tsx`
- Registrar rota em `RouterPaths.ts` e `Router.tsx`
- Adicionar entrada no menu lateral (`siderMenu/data.ts`)

## Capabilities

### New Capabilities
- `flyweight-page`: Página completa do padrão Flyweight seguindo a mesma estrutura dos outros padrões estruturais (Adapter, Bridge, etc.), incluindo conteúdo educacional, exemplo de código funcional, prós/contras e fontes.

### Modified Capabilities
<!-- Nenhuma capability existente é modificada -->

## Impact

- `src/features/designPatterns/features/structural/features/flyweight/` — nova feature
- `src/core/router/RouterPaths.ts` — novo enum entry `DESIGN_PATTERNS_STRUCTURAL_FLYWEIGHT`
- `src/core/router/Router.tsx` — nova rota e import
- `src/core/template/components/siderMenu/data.ts` — novo item no menu
