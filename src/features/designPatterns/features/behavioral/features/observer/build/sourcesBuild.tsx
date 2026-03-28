import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/observer')
        .addSource('https://refactoring.guru/pt-br/design-patterns/observer/typescript/example')
        .build();
}
