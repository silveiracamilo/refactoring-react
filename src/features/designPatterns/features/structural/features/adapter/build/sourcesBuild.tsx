import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/adapter')
        .addSource('https://refactoring.guru/pt-br/design-patterns/adapter/typescript/example')
        .build();
}