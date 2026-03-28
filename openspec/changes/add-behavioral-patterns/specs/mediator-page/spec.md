## ADDED Requirements

### Requirement: Mediator page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `mediator/` contendo `Mediator.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleMediator.tsx, exampleMediatorCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature mediator é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/mediator/` SHALL conter todos os 6 arquivos padrão

### Requirement: Mediator interactive example
O componente de exemplo SHALL demonstrar o padrão Mediator usando paradigma funcional — reduzindo dependências caóticas entre objetos, restringindo comunicação direta e forçando colaboração via mediador.

#### Scenario: User observes mediated communication
- **WHEN** o usuário dispara ações entre componentes no exemplo
- **THEN** o sistema SHALL mostrar que a comunicação passa pelo mediador e não diretamente entre os objetos

### Requirement: Mediator routing and navigation
A rota `/design-patterns/behavioral/mediator` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Mediator page
- **WHEN** o usuário acessa `/design-patterns/behavioral/mediator`
- **THEN** a página do Mediator SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Mediator
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Mediator" que navega para a rota correta

### Requirement: Mediator educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
