import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Elimina condicionais complexos distribuindo lógica entre objetos de estado')
        .addPro('Facilita adicionar novos estados sem modificar os existentes')
        .addPro('Cada estado encapsula seu comportamento e transições de forma coesa')
        .build();

    const cons = prosConsBuilder()
        .addCon('Pode ser excessivo para máquinas de estado com poucos estados')
        .addCon('Aumenta o número de objetos/funções no sistema')
        .addCon('As transições entre estados podem ficar distribuídas e difíceis de visualizar')
        .build();
    
    return { pros, cons };
}
