import { anchorsBuilder } from "@/features/designPatterns/builder/anchorsBuilder"

export const anchorsBuild = () => {
    return anchorsBuilder()
        .addAnchor('part-1', 'Abstract Factory em Programação Funcional')
        .addAnchor('part-2', 'Características no paradigma funcional')
        .addAnchor('part-3', 'Exemplo')
        .addAnchor('part-4', 'Exemplo Renders')
        .addAnchor('part-5', 'Conclusões')
        .addAnchor('part-6', 'Prós e Contras')
        .addAnchor('part-7', 'Fluxograma de decisão')
        .addAnchor('part-8', 'Fontes')
        .build();
}