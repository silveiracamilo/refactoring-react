import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/strategy')
        .addSource('https://refactoring.guru/pt-br/design-patterns/strategy/typescript/example')
        .build();
}
