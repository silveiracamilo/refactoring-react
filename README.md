# Bem-vindo ao Refactoring React

#### Refactoring React é um espaço criado para quem busca escrever código mais limpo, sustentável e de alta qualidade utilizando React com paradigmas funcionais. Aqui você vai aprender, de forma clara, visual e didática, como aplicar na prática conceitos fundamentais como Design Patterns, SOLID, Clean Code e diversas boas práticas de desenvolvimento frontend

Nos inspiramos profundamente no trabalho incrível realizado pelo site [Refactoring Guru](https://refactoring.guru/), que tornou o aprendizado sobre padrões de projeto algo acessível, didático e prazeroso. Este projeto não existiria sem essa referência de excelência.

O projeto segue em construção, mas podem ir acompanhando por ai ;)

[Refactoring React](https://refactoring-react.silveiracamilo.com.br/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

Samples

Factory Method
Abstract Factory
Builder
Prototype
Singleton

Adapter
Bridge
Composite
Decorator
Facade
Flyweight
Proxy

Chain of Responsibility
Command
Iterator
Mediator
Memento
Observer
State
Strategy
Template Method
Visitor