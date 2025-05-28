import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/facade')
        .addSource('https://refactoring.guru/pt-br/design-patterns/facade/typescript/example')
        .build();
}