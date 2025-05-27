export const exampleCompositeCode = 
`import { Menu, type MenuProps } from "antd"
import { useMemo } from "react";

type AntdMenuItemType = Required<MenuProps>['items'][number];

/**
 * Contrato base MenuItem declara operações comuns para objetos simples e complexos de uma composição
*/
type MenuItem = {
    label: string
    path: string
    add: (item: MenuItem) => MenuItem
    remove: (item: MenuItem) => MenuItem
    getChildren: () => Required<MenuProps>['items'][number][]
}

/**
 * Um objeto de composição pode adicionar ou remover items 
 * (simples ou complexos) ou para sua lista de filhos.
*/
const menuComposite = (label: string, path: string): MenuItem =>  {
    const children: MenuItem[] = [];

    const add = (item: MenuItem): MenuItem => {
        children.push(item);
        return _this;
    }

    const remove = (item: MenuItem): MenuItem => {
        const componentIndex = children.indexOf(item);
        children.splice(componentIndex, 1);
        return _this;
    }

    //acoplado AntdMenuItemType pois normalmente tem somente 1 tipo de menu na aplicação
    const getChildren = (): AntdMenuItemType[] =>  {
        return [
            {
                label,
                key: path,
                ...(children.length ? {
                    children: children.flatMap(child => child.getChildren()),
                } : {})
            },
        ];
    }

    const _this: MenuItem = {
        label,
        path,
        add,
        remove,
        getChildren,
    }

    return _this;
}

//componente de exemplo usando Composite
export const ExampleComposite = () => {
    /**
     * nosso menuItems não tem nenhum motivo para mudar e muita menos precisa 
     * reprocessar a composição, use memo ;)
    */
    const menuItems = useMemo(() => {
        const creationalItems =  menuComposite('Creational', '/design-patterns/creational')
            .add(menuComposite('Factory Method', '/design-patterns/creational/factory-method'));

        //objeto complexo de composição
        const structuralItem = menuComposite('Structural', '/design-patterns/structural')
            .add(
                menuComposite('Adapter', '/design-patterns/structural/adapter')
                    .add(menuComposite('Samples', '/design-patterns/structural/adapter/samples'))
            );
        
        //objeto simples de composição
        const behavioral = menuComposite('Behavioral', '/design-patterns/behavioral');
        
        //criar composição complexa e retorna items do menu montado
        return menuComposite('Design Patterns', 'dp')
            .add(creationalItems)
            .add(structuralItem)
            .add(behavioral)
            .getChildren();
    }, []);
    

    return (
        <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
        />
    );
};`;

export const exampleCompositeRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-60'>
    <ExampleComposite />
</div>`;