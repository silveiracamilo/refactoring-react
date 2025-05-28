import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você pode isolar seu código da complexidade de um subsistema')
        .addPro('Fluxos complexos ficam expressos em chamadas simples e sem ruído')
        .addPro('Pode ser usado por vários componentes, serviços, hooks, ou outros módulos')
        .build();

    const cons = prosConsBuilder()
        .addCon('Uma Facade pode se tornar um objeto deus acoplado a todas as funções de uma aplicação')
        .addCon('Se o Facade crescer demais e acumular responsabilidades, ele viola o princípio da responsabilidade única (SRP)')
        .build();
    
    return { pros, cons };
}