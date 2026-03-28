import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Controla o acesso ao objeto real sem que o cliente perceba a diferença')
        .addPro('Permite adicionar caching, logging e validação de forma transparente')
        .addPro('Segue o princípio aberto/fechado — adiciona comportamento sem modificar o serviço original')
        .build();

    const cons = prosConsBuilder()
        .addCon('Adiciona uma camada de indireção que pode aumentar a complexidade do código')
        .addCon('Pode introduzir latência adicional se o proxy realizar operações pesadas')
        .addCon('O cache pode ficar desatualizado se não houver estratégia de invalidação')
        .build();
    
    return { pros, cons };
}
