import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Desacopla completamente o emissor dos receptores de eventos')
        .addPro('Permite adicionar e remover observers em tempo de execução')
        .addPro('Segue o princípio aberto/fechado — novos observers sem modificar o subject')
        .build();

    const cons = prosConsBuilder()
        .addCon('Observers são notificados em ordem arbitrária, sem garantia de sequência')
        .addCon('Pode causar memory leaks se observers não forem desinscritos corretamente')
        .addCon('Cascatas de notificações podem ser difíceis de debugar')
        .build();
    
    return { pros, cons };
}
