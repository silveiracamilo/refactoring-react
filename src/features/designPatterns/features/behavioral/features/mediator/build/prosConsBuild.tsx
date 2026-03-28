import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Centraliza a lógica de comunicação, reduzindo acoplamento entre componentes')
        .addPro('Facilita a adição de novos participantes sem alterar os existentes')
        .addPro('Segue o princípio aberto/fechado — novas interações via mediador sem modificar participantes')
        .build();

    const cons = prosConsBuilder()
        .addCon('O mediador pode se tornar um God Object se acumular muita lógica')
        .addCon('Pode introduzir um ponto único de falha na comunicação')
        .addCon('A complexidade se desloca dos componentes para o mediador')
        .build();
    
    return { pros, cons };
}
