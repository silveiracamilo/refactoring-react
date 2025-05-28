export const exampleHOCDecoratorCode = 
`import { useQuery } from "@tanstack/react-query";
import { Button, notification, Spin } from "antd";
import { memo, useEffect } from "react";

type Permissions = {
    module: string;
    create: boolean;
    delete: boolean;
};

type FCPermissions = {
   permissions: Permissions | undefined
}

type FCTitle = {
    title: string
}

const getPermissions = (module: string) => Promise.resolve({
    module,
    create: true,
    delete: false,
});

const useGetPermissions = (module: string) => {
    return useQuery({ 
        queryKey: [\`permissions-\${module}\`], 
        queryFn: () => getPermissions(module),
    });
};

/**
 * HOC aplicando Decorator incluindo comportamento de carregamento de permissões por modulo
 * Fazendo a injeção de dependência das permissões no componente
 * Tipagem genérica correta com P extends object. 
 * Isso permite que qualquer componente que precise de permissões use esse decorator, 
 * independente de suas outras props (title, id, etc.)
*/
const withModulePermissions = <P extends object>(
    Component: React.ComponentType<P & FCPermissions>, 
    module: string
) => {
    /**
     * Uso de React.memo() no HOC para otimizar renderizações, 
     * evitando renders desnecessários se as props não mudarem.
    */
    return memo((props: P) => {
        const { data: permissions, error, isLoading } = useGetPermissions(module);

        useEffect(() => {
            if (error instanceof Error) {
                notification.error({
                    message: "Error ao carregar permissões",
                    description: error.message,
                });
            }
        }, [error]);

        return (
            <Spin spinning={isLoading}>
                <Component {...props} permissions={permissions} />
            </Spin>
        )
    });
};

/**
 * A separação de responsabilidades: o HOC cuida da lógica de dados, 
 * enquanto o componente cuida apenas da UI
*/
const Sales = withModulePermissions<FCTitle>(({ permissions, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Button disabled={!permissions?.create}>Criar</Button>
            <Button disabled={!permissions?.delete}>Deletar</Button>
        </div>
    )
}, 'sales');

const ExampleHOCDecotar = () => {
    return (
        <Sales title={\`Vendas \${new Date().toISOString()}\`} />
    );
}

export default ExampleHOCDecotar;`;

export const exampleHOCDecoratorRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-60'>
    <ExampleHOCDecotar />
</div>`;