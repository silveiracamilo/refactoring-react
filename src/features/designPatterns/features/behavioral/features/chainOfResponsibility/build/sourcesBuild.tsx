import { sourcesBuilder } from "@/features/designPatterns/builder/sourcesBuilder";

export const sourcesBuild = () => {
    return sourcesBuilder()
        .addSource('https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility')
        .addSource('https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility/typescript/example')
        .build();
}
