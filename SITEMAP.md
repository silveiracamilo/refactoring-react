# Site Map - Design Patterns Learning Platform

## 📋 Estrutura de Navegação

Este é um portal educacional interativo sobre **Design Patterns em React**. A aplicação é organizada em uma hierarquia clara de rotas com lazy-loading para otimizar performance.

---

## 🌍 Páginas Principais

### 1. **Home** `/`
- Página inicial da aplicação
- Ponto de entrada para o usuário
- Navegação para padrões de design

### 2. **Design Patterns** `/design-patterns`
- Hub principal para todos os padrões
- Acesso às 3 categorias principais
- Exibição de padrões organizados por tipo

---

## 🏗️ Categorias de Design Patterns

### 📦 Padrões Criacionais (Creational)
**Rota Base:** `/design-patterns/creational`

Padrões que lidam com mecanismos de criação de objetos:

| Padrão | Rota | Descrição |
|--------|------|-----------|
| **Factory Method** | `/design-patterns/creational/factory-method` | Cria objetos sem especificar suas classes concretas |
| **Abstract Factory** | `/design-patterns/creational/abstract-factory` | Cria famílias de objetos relacionados |
| **Builder** | `/design-patterns/creational/builder` | Constrói objetos complexos passo a passo |
| **Prototype** | `/design-patterns/creational/prototype` | Cria novos objetos por clonagem |
| **Singleton** | `/design-patterns/creational/singleton` | Garante apenas uma instância de uma classe |

---

### 🔧 Padrões Estruturais (Structural)
**Rota Base:** `/design-patterns/structural`

Padrões que lidam com composição de classes e objetos:

| Padrão | Rota | Descrição |
|--------|------|-----------|
| **Adapter** | `/design-patterns/structural/adapter` | Adapta a interface de uma classe para outra |
| **Bridge** | `/design-patterns/structural/bridge` | Desacopla abstração de implementação |
| **Composite** | `/design-patterns/structural/composite` | Compõe objetos em estruturas de árvore |
| **Decorator** | `/design-patterns/structural/decorator` | Adiciona responsabilidades a objetos |
| **Facade** | `/design-patterns/structural/facade` | Fornece interface unificada |
| **Flyweight** | `/design-patterns/structural/flyweight` | Compartilha objetos para economizar memória |
| **Proxy** | `/design-patterns/structural/proxy` | Fornece substituto ou placeholder |

---

### 🎭 Padrões Comportamentais (Behavioral)
**Rota Base:** `/design-patterns/behavioral`

Padrões que lidam com comunicação entre objetos:

| Padrão | Rota | Descrição |
|--------|------|-----------|
| **Chain of Responsibility** | `/design-patterns/behavioral/chain-of-responsibility` | Passa requisições através de uma cadeia |
| **Command** | `/design-patterns/behavioral/command` | Encapsula requisições como objetos |
| **Iterator** | `/design-patterns/behavioral/iterator` | Acessa elementos sequencialmente |
| **Mediator** | `/design-patterns/behavioral/mediator` | Centraliza comunicação entre objetos |
| **Memento** | `/design-patterns/behavioral/memento` | Captura estado interno sem violar encapsulamento |
| **Observer** | `/design-patterns/behavioral/observer` | Define dependência um-para-muitos |
| **State** | `/design-patterns/behavioral/state` | Altera comportamento quando estado muda |
| **Strategy** | `/design-patterns/behavioral/strategy` | Define família de algoritmos |
| **Template Method** | `/design-patterns/behavioral/template-method` | Define esqueleto de algoritmo na superclasse |
| **Visitor** | `/design-patterns/behavioral/visitor` | Representa operação a ser executada |

---

## 📁 Estrutura de Arquivos

```
src/
├── core/
│   ├── App.tsx                 # Componente raiz
│   ├── router/
│   │   ├── Router.tsx          # Configuração de rotas
│   │   ├── RouterPaths.ts      # Enumeração de paths
│   │   └── RouteTemplate.tsx   # Layout wrapper
│   ├── template/               # Template/Layout compartilhado
│   ├── context/                # Contextos globais
│   └── theme.ts                # Configuração de tema
│
├── features/
│   ├── home/                   # Feature: Página inicial
│   ├── designPatterns/         # Feature: Design Patterns
│   │   ├── features/
│   │   │   ├── creational/     # Padrões criacionais
│   │   │   ├── structural/     # Padrões estruturais
│   │   │   └── behavioral/     # Padrões comportamentais
│   │   └── loadable.tsx        # Lazy loading
│   └── noMatch/                # Feature: 404
│
└── shared/
    ├── components/             # Componentes reutilizáveis
    ├── utils/                  # Utilitários
    ├── translation/            # i18n (Internacionalização)
    └── style/                  # Estilos globais
```

---

## 🔄 Fluxo de Navegação

```
Home (/)
  └── Design Patterns (/design-patterns)
      ├── Creational (/design-patterns/creational)
      │   ├── Factory Method
      │   ├── Abstract Factory
      │   ├── Builder
      │   ├── Prototype
      │   └── Singleton
      │
      ├── Structural (/design-patterns/structural)
      │   ├── Adapter
      │   ├── Bridge
      │   ├── Composite
      │   ├── Decorator
      │   ├── Facade
      │   ├── Flyweight
      │   └── Proxy
      │
      └── Behavioral (/design-patterns/behavioral)
          ├── Chain of Responsibility
          ├── Command
          ├── Iterator
          ├── Mediator
          ├── Memento
          ├── Observer
          ├── State
          ├── Strategy
          ├── Template Method
          └── Visitor
```

---

## 📊 Estatísticas

- **Total de páginas:** 24
- **Página inicial:** 1
- **Hub de Design Patterns:** 1
- **Páginas de categoria:** 3
- **Páginas de padrões:** 22
- **Páginas de erro:** 1 (404)

---

## 🎯 Recursos Principais

- ✅ Lazy loading de componentes para performance otimizada
- ✅ Internacionalização (en, pt)
- ✅ Tema Ant Design customizado
- ✅ Roteamento com React Router v7
- ✅ TypeScript para type safety
- ✅ ErrorBoundary para tratamento de erros
- ✅ Build otimizado com Vite

---

## 🔗 Componentes Compartilhados

- `errorBoundary/` - Tratamento de erros
- `languageDropdown/` - Seletor de idioma
- `loading/` - Indicador de carregamento
- `syntaxHighlight/` - Destaque de sintaxe de código

---

## 📝 Arquivos Importantes

- [RouterPaths.ts](src/core/router/RouterPaths.ts) - Definição de todas as rotas
- [Router.tsx](src/core/router/Router.tsx) - Configuração de rotas
- [App.tsx](src/core/App.tsx) - Componente raiz
- [Template.tsx](src/core/template/Template.tsx) - Layout principal
