import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/builder')
        .addSource('https://www.tabnews.com.br/Agnos/aplicando-design-patterns-criacionais-em-componentes-react')
        .build();
}