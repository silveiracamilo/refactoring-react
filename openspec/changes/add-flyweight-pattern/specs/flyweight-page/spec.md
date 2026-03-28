## ADDED Requirements

### Requirement: Flyweight page follows structural pattern template
A feature Flyweight SHALL seguir a mesma estrutura de arquivos e componentes dos outros padrões estruturais (Adapter, Bridge, Composite, Decorator, Facade), incluindo `Flyweight.tsx`, `index.tsx`, `loadable.tsx`, diretório `build/` e diretório `sample/`.

#### Scenario: Feature directory structure matches existing patterns
- **WHEN** a feature flyweight é criada
- **THEN** o diretório `src/features/designPatterns/features/structural/features/flyweight/` DEVE conter `Flyweight.tsx`, `index.tsx`, `loadable.tsx`, `build/anchorsBuild.tsx`, `build/sourcesBuild.tsx`, `build/prosConsBuild.tsx` e ao menos um arquivo em `sample/`

### Requirement: Flyweight page renders educational content
A página do Flyweight SHALL exibir conteúdo educacional sobre o padrão Flyweight no paradigma funcional, incluindo definição, características, exemplo de código e conclusões.

#### Scenario: Page displays all content sections
- **WHEN** o usuário navega para `/design-patterns/structural/flyweight`
- **THEN** a página DEVE exibir seções de título, características, exemplo de código com syntax highlight, exemplo renderizado e conclusões

### Requirement: Flyweight page uses TemplateDesignPatterns wrapper
A página SHALL usar o componente `TemplateDesignPatterns` com âncoras, fontes e prós/contras via builders.

#### Scenario: Page renders with template wrapper
- **WHEN** o componente `FlyweightPage` é renderizado
- **THEN** ele DEVE usar `TemplateDesignPatterns` passando `anchors`, `sources` e `prosCons` via `useMemo`

### Requirement: Flyweight route is registered
A rota do Flyweight SHALL estar registrada no router e acessível via navegação.

#### Scenario: Route path exists in RouterPaths enum
- **WHEN** o enum `RouterPaths` é consultado
- **THEN** DEVE conter `DESIGN_PATTERNS_STRUCTURAL_FLYWEIGHT` com valor `/design-patterns/structural/flyweight`

#### Scenario: Route is registered in Router component
- **WHEN** o componente `Router` é renderizado
- **THEN** DEVE incluir uma `Route` para `RouterPaths.DESIGN_PATTERNS_STRUCTURAL_FLYWEIGHT` com elemento `FlyweightPage`

### Requirement: Flyweight appears in sidebar menu
O Flyweight SHALL aparecer no menu lateral sob a categoria Structural.

#### Scenario: Menu item is present
- **WHEN** o menu lateral é renderizado
- **THEN** DEVE conter um item "Flyweight" dentro do submenu "Structural" com key `RouterPaths.DESIGN_PATTERNS_STRUCTURAL_FLYWEIGHT`

### Requirement: Flyweight page is lazy loaded
A página do Flyweight SHALL ser carregada via lazy loading usando `lazyLoad()`.

#### Scenario: Loadable exports lazy component
- **WHEN** `FlyweightPage` é importado de `loadable.tsx`
- **THEN** o componente DEVE ser criado via `lazyLoad(() => import('.'), module => module.FlyweightPage)`
