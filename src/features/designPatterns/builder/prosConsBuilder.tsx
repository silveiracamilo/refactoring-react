type IProConColor = 'green' | 'red';

export type IProCon = {
    color: IProConColor
    children: string
}

export type IProsCons = {
    pros: IProCon[]
    cons: IProCon[]
}

type IProsConsBuilder = {
    addPro: (children: string) => IProsConsBuilder
    addCon: (children: string) => IProsConsBuilder
    build: () => IProCon[]
}

export const proConFactory = (color: IProConColor, children: string): IProCon => ({
    color,
    children
});

export const prosConsFactory = (pros: IProCon[], cons: IProCon[]): IProsCons => ({
    pros,
    cons
});

export const prosConsBuilder = (prosCons: IProCon[] = []): IProsConsBuilder => {
    const addPro = (children: string) => prosConsBuilder([
        ...prosCons, 
        proConFactory('green', children)
    ]);
    
    const addCon = (children: string) => prosConsBuilder([
        ...prosCons, 
        proConFactory('red', children)
    ]);
    
    const build = () => prosCons;

    return { addPro, addCon, build };
}