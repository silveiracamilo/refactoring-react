## ADDED Requirements

### Requirement: Memento page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `memento/` contendo `Memento.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleMemento.tsx, exampleMementoCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature memento é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/memento/` SHALL conter todos os 6 arquivos padrão

### Requirement: Memento interactive example
O componente de exemplo SHALL demonstrar o padrão Memento usando paradigma funcional — salvando e restaurando o estado anterior de um objeto sem revelar os detalhes de sua implementação.

#### Scenario: User saves and restores state
- **WHEN** o usuário modifica o estado e clica em salvar/restaurar
- **THEN** o sistema SHALL salvar snapshots do estado e permitir restaurar a qualquer ponto salvo

### Requirement: Memento routing and navigation
A rota `/design-patterns/behavioral/memento` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Memento page
- **WHEN** o usuário acessa `/design-patterns/behavioral/memento`
- **THEN** a página do Memento SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Memento
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Memento" que navega para a rota correta

### Requirement: Memento educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
