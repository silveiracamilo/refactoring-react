## ADDED Requirements

### Requirement: Template Method page structure
A feature SHALL seguir a estrutura padrão de feature do projeto: `templateMethod/` contendo `TemplateMethod.tsx`, `index.tsx`, `loadable.tsx`, `build/` (anchorsBuild, prosConsBuild, sourcesBuild) e `sample/` (ExampleTemplateMethod.tsx, exampleTemplateMethodCode.ts).

#### Scenario: Feature directory exists with all required files
- **WHEN** a feature templateMethod é criada
- **THEN** o diretório `src/features/designPatterns/features/behavioral/features/templateMethod/` SHALL conter todos os 6 arquivos padrão

### Requirement: Template Method interactive example
O componente de exemplo SHALL demonstrar o padrão Template Method usando paradigma funcional — definindo o esqueleto de um algoritmo em uma função base e permitindo que subfunções sobrescrevam passos específicos sem alterar a estrutura.

#### Scenario: User observes algorithm variations
- **WHEN** o usuário seleciona diferentes variações do algoritmo
- **THEN** o sistema SHALL executar o mesmo esqueleto com passos específicos diferentes e exibir o resultado

### Requirement: Template Method routing and navigation
A rota `/design-patterns/behavioral/template-method` SHALL estar registrada em `RouterPaths.ts`, `Router.tsx` e no menu lateral.

#### Scenario: User navigates to Template Method page
- **WHEN** o usuário acessa `/design-patterns/behavioral/template-method`
- **THEN** a página do Template Method SHALL ser carregada via lazy-load

#### Scenario: Menu item exists for Template Method
- **WHEN** o usuário expande o menu Behavioral
- **THEN** SHALL existir um item "Template Method" que navega para a rota correta

### Requirement: Template Method educational content
O componente principal SHALL conter: título, descrição do padrão no paradigma funcional, características, exemplo de código com SyntaxHighlight, exemplo interativo renderizado, e conclusões.

#### Scenario: Page displays complete educational content
- **WHEN** a página é carregada
- **THEN** SHALL exibir seções de descrição, características, exemplo de código, exemplo renderizado e conclusões
