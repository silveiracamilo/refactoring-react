## ADDED Requirements

### Requirement: Visitor page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `visitor/` contendo `Visitor.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleVisitor.tsx, exampleVisitorCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature visitor é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/visitor/` SHALL conter todos os 6 arquivos padrão

### Requirement: Visitor interactive example
O componente de exemplo SHALL demonstrar o padrão Visitor usando paradigma funcional — permitindo separar algoritmos dos objetos sobre os quais operam, adicionando novas operações sem modificar os objetos.

#### Scenario: User applies different visitors to elements
- **WHEN** o usuário seleciona diferentes operações (visitors) para aplicar
- **THEN** o sistema SHALL executar a operação correspondente em cada elemento e exibir os resultados

### Requirement: Visitor routing and navigation
A rota `/design-patterns/behavioral/visitor` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Visitor page
- **WHEN** o usuário acessa `/design-patterns/behavioral/visitor`
- **THEN** a página do Visitor SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Visitor
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Visitor" que navega para a rota correta

### Requirement: Visitor educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
