import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/template-method')
        .addSource('https://refactoring.guru/pt-br/design-patterns/template-method/typescript/example')
        .build();
}
