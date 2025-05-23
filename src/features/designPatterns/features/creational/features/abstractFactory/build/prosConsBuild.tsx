import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você pode ter certeza que os perfis que você obtém de uma fábrica são compatíveis entre si')
        .addPro('Você evita um vínculo forte entre perfis concretos e o código cliente')
        .addPro('Princípio de responsabilidade única. Você pode extrair o código de criação do perfil para um lugar, fazendo o código ser de fácil manutenção')
        .addPro('Princípio aberto/fechado. Você pode introduzir novos tipos de perfis no programa sem quebrar o código cliente existente')
        .addPro('Inversão de dependências a navegação (navigate) não está acoplada à implementação (location.assign ou React Router), tornando o código adaptável a qualquer ambiente')
        .addPro('Código escalável e de fácil teste')
        .build();

    const cons = prosConsBuilder()
        .addCon('O código pode tornar-se mais complicado do que deveria ser, uma vez que muitas novas types e funções são introduzidas junto com o padrão')
        .addCon('Para projetos pequenos ou de baixa complexidade, pode parecer overengineering')
        .addCon('Desenvolvedores menos experientes podem ter dificuldade em entender o fluxo, especialmente se não estiverem familiarizados com padrões de projeto no paradigma funcional')
        .build();
    
    return { pros, cons };
}