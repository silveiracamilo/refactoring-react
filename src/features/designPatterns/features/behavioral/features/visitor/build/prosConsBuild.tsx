import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Separa algoritmos das estruturas de dados, seguindo responsabilidade única')
        .addPro('Permite adicionar novas operações sem modificar os elementos existentes')
        .addPro('Agrupa operações relacionadas em um único visitor, facilitando manutenção')
        .build();

    const cons = prosConsBuilder()
        .addCon('Adicionar novos tipos de elementos requer atualizar todos os visitors existentes')
        .addCon('Pode quebrar o encapsulamento se visitors precisarem acessar dados internos')
        .addCon('Pode ser excessivo quando a hierarquia de elementos muda frequentemente')
        .build();
    
    return { pros, cons };
}
