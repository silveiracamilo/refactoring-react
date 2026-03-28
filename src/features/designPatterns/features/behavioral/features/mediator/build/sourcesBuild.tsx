import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/mediator')
        .addSource('https://refactoring.guru/pt-br/design-patterns/mediator/typescript/example')
        .build();
}
