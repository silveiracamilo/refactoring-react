import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Economiza memória ao compartilhar estado intrínseco entre muitos objetos similares')
        .addPro('Reduz o número de instâncias criadas, melhorando performance em cenários com grande volume de dados')
        .addPro('Separa claramente estado compartilhável (intrínseco) de estado único (extrínseco)')
        .build();

    const cons = prosConsBuilder()
        .addCon('Aumenta a complexidade do código ao separar estado intrínseco do extrínseco')
        .addCon('Pode dificultar a leitura e manutenção se aplicado em cenários onde a economia de memória é irrelevante')
        .addCon('O cache pode crescer indefinidamente se não houver estratégia de invalidação')
        .build();
    
    return { pros, cons };
}
