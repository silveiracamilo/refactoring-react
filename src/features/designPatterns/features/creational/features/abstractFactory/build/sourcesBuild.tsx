import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/abstract-factory')
        .addSource('https://www.tabnews.com.br/Agnos/aplicando-design-patterns-criacionais-em-componentes-react')
        .build();
}