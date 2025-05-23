import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você pode construir objetos passo a passo, adiar as etapas de construção ou rodar etapas recursivamente')
        .addPro('Você pode reutilizar o mesmo código de construção quando construindo várias representações de menus ou personagens')
        .addPro('Princípio de responsabilidade única. Você pode isolar um código de construção complexo da lógica de negócio do menu ou personagem')
        .build();

    const cons = prosConsBuilder()
        .addCon('A complexidade geral do código aumenta uma vez que o padrão exige criar múltiplas funções novas')
        .addCon('Sobrecarga de Código: requer escrever mais código boilerplate: types, métodos setters e o método build. Às vezes é um exagero para objetos simples.')
        .addCon('Aumento do Custo Cognitivo: novos desenvolvedores podem levar mais tempo para entender como usar corretamente o Builder, especialmente em sistemas complexos ou altamente abstratos')
        .build();
    
    return { pros, cons };
}