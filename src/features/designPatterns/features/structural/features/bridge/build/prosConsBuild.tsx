import { prosConsBuilder, type IProsCons } from "@/features/designPatterns/builder/prosConsBuilder";

export const prosConsBuild = (): IProsCons => {
    const pros = prosConsBuilder()
        .addPro(' O código cliente trabalha com abstrações em alto nível. Ele não fica exposto a detalhes de plataforma')
        .addPro('Princípio de responsabilidade única. Você pode focar na lógica de alto nível na abstração e em detalhes de plataforma na implementação')
        .addPro('Princípio aberto/fechado. Você pode introduzir novas abstrações e implementações independentemente uma das outras')
        .addPro('Inversão de Dependência — abstrações não dependem de implementações concretas')
        .build();

    const cons = prosConsBuilder()
        .addCon('Aumento da complexidade inicial, exige criar contratos (interfaces/tipos), abstrações e implementações separadas')
        .addCon('Curva de aprendizado, quem não entende bem composição, inversão de dependência e padrões pode achar mais difícil no início')
        .build();
    
    return { pros, cons };
}