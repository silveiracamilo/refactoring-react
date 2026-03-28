import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Permite trocar algoritmos em tempo de execução sem modificar o contexto')
        .addPro('Isola a implementação de cada algoritmo, facilitando testes')
        .addPro('Segue o princípio aberto/fechado — novas estratégias sem alterar código existente')
        .build();

    const cons = prosConsBuilder()
        .addCon('O cliente precisa conhecer as diferenças entre estratégias para escolher a correta')
        .addCon('Pode ser excessivo quando há poucos algoritmos que raramente mudam')
        .addCon('Funções anônimas podem dificultar debugging se não forem bem nomeadas')
        .build();
    
    return { pros, cons };
}
