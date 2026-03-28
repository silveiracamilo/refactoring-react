## ADDED Requirements

### Requirement: Iterator page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `iterator/` contendo `Iterator.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleIterator.tsx, exampleIteratorCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature iterator é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/iterator/` SHALL conter todos os 6 arquivos padrão

### Requirement: Iterator interactive example
O componente de exemplo SHALL demonstrar o padrão Iterator usando paradigma funcional — permitindo percorrer elementos de uma coleção sem expor sua representação subjacente.

#### Scenario: User iterates through a collection
- **WHEN** o usuário interage com o exemplo
- **THEN** o sistema SHALL mostrar a navegação sequencial pelos elementos da coleção

### Requirement: Iterator routing and navigation
A rota `/design-patterns/behavioral/iterator` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Iterator page
- **WHEN** o usuário acessa `/design-patterns/behavioral/iterator`
- **THEN** a página do Iterator SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Iterator
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Iterator" que navega para a rota correta

### Requirement: Iterator educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
