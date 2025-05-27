import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você pode trabalhar com estruturas de árvore complexas mais convenientemente: utilize o pattern matching e a recursão a seu favor')
        .addPro('Princípio aberto/fechado. Você pode introduzir novos tipos de elemento na aplicação sem quebrar o código existente, o que agora funciona com a árvore de objetos')
        .addPro('Promove Recursão de Forma Elegante: O padrão se adapta naturalmente a algoritmos recursivos para percorrer ou transformar a árvore')
        .build();

    const cons = prosConsBuilder()
        .addCon('Pode ser difícil providenciar uma interface comum para objetos cuja funcionalidade difere muito. Em certos cenários, você precisaria generalizar muito a interface componente, fazendo dela uma interface de difícil compreensão')
        .addCon('Possível aumento de complexidade. Para estruturas muito simples, o Composite pode ser um overengineering')
        .build();
    
    return { pros, cons };
}