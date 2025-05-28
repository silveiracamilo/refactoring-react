import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Você pode estender o comportamento de um objeto sem fazer um nova função')
        .addPro('Você pode adicionar ou remover responsabilidades de um objeto no momento da execução')
        .addPro('Você pode combinar diversos comportamentos ao envolver o objeto com múltiplos decoradores')
        .addPro('Princípio de responsabilidade única. Você pode dividir uma função monolítica que implementa muitas possíveis variantes de um comportamento em diversas funções menores')
        .build();

    const cons = prosConsBuilder()
        .addCon('É difícil remover um decorator de uma pilha de decorator')
        .addCon('Múltiplos decorators encadeados podem gerar código difícil de ler ou debugar')
        .addCon('Stack traces ficam mais complexos, especialmente se vários decorators estão encadeados')
        .build();
    
    return { pros, cons };
}