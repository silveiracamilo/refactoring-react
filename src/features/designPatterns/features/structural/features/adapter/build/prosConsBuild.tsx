import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Princípio de responsabilidade única. Você pode separar a conversão de interface ou de dados da lógica primária do negócio do programa')
        .addPro('Princípio aberto/fechado. Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente, desde que eles trabalhem com os adaptadores através da interface cliente')
        .addPro('Evita espalhar lógica de transformação pelo código DRY')
        .build();

    const cons = prosConsBuilder()
        .addCon('A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e funções')
        .build();
    
    return { pros, cons };
}