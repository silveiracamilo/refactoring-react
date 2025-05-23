import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você evita acoplamentos firmes entre o criador e os perfis concretos')
        .addPro('Princípio de responsabilidade única. Você pode mover o código de criação do perfil para um único local do programa, facilitando a manutenção do código')
        .addPro('Princípio aberto/fechado. Você pode introduzir novos tipos de perfis no programa sem quebrar o código cliente existente')
        .build();

    const cons = prosConsBuilder()
        .addCon('O código pode se tornar mais complicado, pois você precisa introduzir muitas funções novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão em uma hierarquia existente de funções criadoras')
        .build();
    
    return { pros, cons };
}