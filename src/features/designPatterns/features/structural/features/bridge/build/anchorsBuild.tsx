import { anchorsBuilder } from "@/features/designPatterns/builder/anchorsBuilder"

export const anchorsBuild = () => {
    return anchorsBuilder()
        .addAnchor('part-1', 'Bridge em Programação Funcional')
        .addAnchor('part-2', 'Características no paradigma funcional')
        .addAnchor('part-3', 'Exemplo')
        .addAnchor('part-4', 'Exemplo Render')
        .addAnchor('part-5', 'Conclusões')
        .addAnchor('part-6', 'Prós e Contras')
        .addAnchor('part-7', 'Fontes')
        .build();
}