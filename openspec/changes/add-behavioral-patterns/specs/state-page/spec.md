## ADDED Requirements

### Requirement: State page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `state/` contendo `State.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleState.tsx, exampleStateCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature state é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/state/` SHALL conter todos os 6 arquivos padrão

### Requirement: State interactive example
O componente de exemplo SHALL demonstrar o padrão State usando paradigma funcional — permitindo que um objeto altere seu comportamento quando seu estado interno muda, como se tivesse mudado de classe.

#### Scenario: User transitions between states
- **WHEN** o usuário interage com o exemplo e causa transições de estado
- **THEN** o sistema SHALL refletir visualmente o estado atual e o comportamento associado a cada estado

### Requirement: State routing and navigation
A rota `/design-patterns/behavioral/state` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to State page
- **WHEN** o usuário acessa `/design-patterns/behavioral/state`
- **THEN** a página do State SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for State
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "State" que navega para a rota correta

### Requirement: State educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
