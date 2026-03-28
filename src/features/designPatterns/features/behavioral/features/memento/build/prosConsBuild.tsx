import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Preserva o encapsulamento ao salvar estado sem expor detalhes internos')
        .addPro('Permite implementar undo/redo de forma transparente e confiável')
        .addPro('Snapshots imutáveis garantem que estados anteriores não sejam corrompidos')
        .build();

    const cons = prosConsBuilder()
        .addCon('O histórico de mementos pode consumir muita memória em estados grandes')
        .addCon('Requer gerenciamento cuidadoso do ciclo de vida dos mementos')
        .addCon('Pode ser custoso se o estado for copiado muito frequentemente')
        .build();
    
    return { pros, cons };
}
