import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/composite')
        .addSource('https://refactoring.guru/pt-br/design-patterns/composite/typescript/example')
        .build();
}