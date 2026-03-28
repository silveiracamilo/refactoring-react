## ADDED Requirements

### Requirement: Proxy page structure
A página do Proxy SHALL seguir a mesma estrutura dos outros padrões estruturais, contendo componente principal (`Proxy.tsx`), index com `ProxyPage`, loadable com lazy loading, builders (anchors, sources, prosCons) e sample com exemplo interativo.

#### Scenario: Page renders correctly
- **WHEN** o usuário navega para `/design-patterns/structural/proxy`
- **THEN** a página exibe título, explicação, características, exemplo interativo, prós/contras e fontes

### Requirement: Proxy component content
O componente `Proxy.tsx` SHALL conter explicação do padrão Proxy no paradigma funcional, incluindo título principal, parágrafo explicativo, lista de características, exemplo de código com SyntaxHighlight, exemplo render e conclusões.

#### Scenario: Content sections displayed
- **WHEN** a página é carregada
- **THEN** todas as seções (título, características, exemplo, render, conclusões) são exibidas com IDs de anchor corretos (part-1 a part-7)

### Requirement: Interactive proxy example
O exemplo interativo SHALL demonstrar um Cache Proxy que intercepta chamadas a um serviço simulado, adicionando caching e logging. O usuário MUST poder visualizar a diferença entre chamadas diretas (sem cache) e chamadas via proxy (com cache).

#### Scenario: First call goes to service
- **WHEN** o usuário solicita dados pela primeira vez via proxy
- **THEN** o proxy busca do serviço real e armazena no cache, exibindo log de "cache miss"

#### Scenario: Subsequent call uses cache  
- **WHEN** o usuário solicita os mesmos dados novamente via proxy
- **THEN** o proxy retorna do cache sem chamar o serviço real, exibindo log de "cache hit"

### Requirement: Template integration
A `ProxyPage` SHALL usar o `TemplateDesignPatterns` wrapper com anchors, sources e prosCons, seguindo o mesmo padrão de integração dos outros patterns.

#### Scenario: Template renders with all sections
- **WHEN** a ProxyPage é montada
- **THEN** o TemplateDesignPatterns renderiza o menu de anchors, conteúdo principal, seção de prós/contras e seção de fontes

### Requirement: Router registration
A rota SHALL ser registrada em `RouterPaths.ts` como `DESIGN_PATTERNS_STRUCTURAL_PROXY` com path `/design-patterns/structural/proxy`, e a route SHALL ser adicionada em `Router.tsx`.

#### Scenario: Navigation to proxy page
- **WHEN** o usuário acessa `/design-patterns/structural/proxy`
- **THEN** a ProxyPage é renderizada dentro do RouteTemplate

### Requirement: Sider menu entry
O menu lateral SHALL incluir item 'Proxy' dentro do grupo Structural, usando a key `RouterPaths.DESIGN_PATTERNS_STRUCTURAL_PROXY`.

#### Scenario: Menu shows Proxy item
- **WHEN** o usuário expande o menu Structural
- **THEN** o item 'Proxy' aparece na lista junto com os outros padrões estruturais

### Requirement: Lazy loading
A ProxyPage SHALL ser carregada via lazy loading usando a função `lazyLoad` de `@/shared/utils/loadable`, seguindo o padrão do `loadable.tsx` dos outros patterns.

#### Scenario: Page loads lazily
- **WHEN** o usuário navega para a página do Proxy
- **THEN** o chunk do Proxy é carregado sob demanda (code splitting)
