import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/bridge')
        .addSource('https://refactoring.guru/pt-br/design-patterns/bridge/typescript/example')
        .build();
}