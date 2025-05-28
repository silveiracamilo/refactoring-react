import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/decorator')
        .addSource('https://refactoring.guru/pt-br/design-patterns/decorator/typescript/example')
        .build();
}