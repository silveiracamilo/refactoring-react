import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Desacopla o objeto que invoca a operação do que a executa')
        .addPro('Permite implementar undo/redo de forma simples com histórico de comandos')
        .addPro('Facilita composição de macro-comandos e operações em lote')
        .build();

    const cons = prosConsBuilder()
        .addCon('Pode aumentar a complexidade ao criar muitos objetos de comando')
        .addCon('O histórico de comandos pode consumir memória se não for limitado')
        .addCon('Implementar undo pode ser complexo quando operações têm efeitos colaterais')
        .build();
    
    return { pros, cons };
}
