import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro('Código mais declarativo e legível, a composição de dados se torna mais expressiva e fácil de entender')
        .addPro('Facilidade de manutenção e extensão, adicionar novos tipos ou variações é só criar um novo objeto derivado do protótipo, sem quebrar código existente')
        .addPro('Testabilidade alta, funções puras são fáceis de testar, não dependem de contexto nem estado interno')
        .build();

    const cons = prosConsBuilder()
        .addCon('Diferente da POO, onde métodos e estados podem ser encapsulados, na abordagem funcional os dados ficam mais expostos, e o controle de acesso depende da disciplina dos desenvolvedores')
        .build();
    
    return { pros, cons };
}