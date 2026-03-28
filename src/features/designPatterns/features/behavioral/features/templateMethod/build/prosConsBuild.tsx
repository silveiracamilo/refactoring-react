import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Evita duplicação ao centralizar a lógica comum no template')
        .addPro('Permite variações controladas — apenas os passos definidos podem ser customizados')
        .addPro('Facilita manutenção — alterações na estrutura do algoritmo são feitas em um único lugar')
        .build();

    const cons = prosConsBuilder()
        .addCon('A estrutura fixa do template pode limitar a flexibilidade de implementações')
        .addCon('Pode ser difícil entender o fluxo quando há muitos passos customizáveis')
        .addCon('Viola o princípio de substituição de Liskov se os passos tiverem pré-condições implícitas')
        .build();
    
    return { pros, cons };
}
