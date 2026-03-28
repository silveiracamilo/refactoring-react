import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/memento')
        .addSource('https://refactoring.guru/pt-br/design-patterns/memento/typescript/example')
        .build();
}
