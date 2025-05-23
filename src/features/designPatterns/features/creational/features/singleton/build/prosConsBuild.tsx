import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Ponto Único de Acesso: Centraliza o acesso a recursos, serviços ou dados compartilhados')
        .addPro('Controle de Instância: Garante que só exista uma única instância daquele recurso na aplicação')
        .addPro('Redução de Sobrecarga: Evita múltiplas inicializações de recursos pesados (API clients, sockets, SDKs, caches, etc.)')
        .addPro('Facilidade em Compartilhar Estado: Permite manter contadores, caches e estados compartilhados fora dos componentes React')
        .addPro('Organização e Clareza: Separa responsabilidades e facilita encontrar onde um determinado serviço está implementado')
        .build();

    const cons = prosConsBuilder()
        .addCon('Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez')
        .addCon('O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do aplicação sabem muito sobre cada um')
        .addCon('Dificulta Testes Unitários: Pode gerar dependências ocultas e dificuldade em fazer mocks/fakes durante testes')
        .addCon('Não é trivial "resetar" um Singleton, principalmente entre ciclos de testes ou hot reloads.')
        .addCon('Problemas em Ambientes Server-side: Em ambientes como Next.js (SSR), o Singleton pode causar compartilhamento indevido entre requisições se não for isolado corretamente')
        .build();
    
    return { pros, cons };
}