import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/visitor')
        .addSource('https://refactoring.guru/pt-br/design-patterns/visitor/typescript/example')
        .build();
}
