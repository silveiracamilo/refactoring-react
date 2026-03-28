import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Abstrai a lógica de travessia da coleção, seguindo o princípio da responsabilidade única')
        .addPro('Permite iterar sobre estruturas de dados diferentes com a mesma interface')
        .addPro('Suporta múltiplos iteradores simultâneos e independentes')
        .build();

    const cons = prosConsBuilder()
        .addCon('Pode ser desnecessário para coleções simples como arrays')
        .addCon('Adiciona complexidade extra quando a estrutura de dados já expõe iteração nativa')
        .addCon('O estado do iterador pode ficar inconsistente se a coleção for modificada durante a iteração')
        .build();
    
    return { pros, cons };
}
