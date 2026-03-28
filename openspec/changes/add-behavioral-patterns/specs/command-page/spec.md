## ADDED Requirements

### Requirement: Command page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `command/` contendo `Command.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleCommand.tsx, exampleCommandCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature command é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/command/` SHALL conter todos os 6 arquivos padrão

### Requirement: Command interactive example
O componente de exemplo SHALL demonstrar o padrão Command usando paradigma funcional — encapsulando uma requisição como objeto standalone com todas as informações sobre a requisição.

#### Scenario: User executes and undoes commands
- **WHEN** o usuário executa comandos no exemplo interativo
- **THEN** o sistema SHALL mostrar o histórico de comandos e permitir desfazer operações

### Requirement: Command routing and navigation
A rota `/design-patterns/behavioral/command` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Command page
- **WHEN** o usuário acessa `/design-patterns/behavioral/command`
- **THEN** a página do Command SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Command
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Command" que navega para a rota correta

### Requirement: Command educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
