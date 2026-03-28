import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Desacopla o remetente da requisição dos seus receptores')
        .addPro('Permite adicionar ou remover handlers dinamicamente sem alterar o código existente')
        .addPro('Segue o princípio da responsabilidade única — cada handler lida com uma preocupação')
        .build();

    const cons = prosConsBuilder()
        .addCon('Não há garantia de que a requisição será processada por algum handler')
        .addCon('Pode ser difícil debugar quando a cadeia é longa e complexa')
        .addCon('Pode introduzir latência se muitos handlers forem percorridos antes de encontrar o correto')
        .build();
    
    return { pros, cons };
}
