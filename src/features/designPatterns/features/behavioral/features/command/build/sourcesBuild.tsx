import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/command')
        .addSource('https://refactoring.guru/pt-br/design-patterns/command/typescript/example')
        .build();
}
