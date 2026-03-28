import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/flyweight')
        .addSource('https://refactoring.guru/pt-br/design-patterns/flyweight/typescript/example')
        .build();
}
