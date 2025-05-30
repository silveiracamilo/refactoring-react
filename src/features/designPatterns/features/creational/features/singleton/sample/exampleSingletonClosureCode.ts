export const exampleSingletonClosureCode = 
`import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

type Joke = {
    icon_url: string;
    id: string;
    value: string;
}

/*
    cria Singleton com closure centralizando chamadas de api, 
    reparem que terá somente uma única instância de ApiChunkNorris.
    dentro da closure conseguimos emular variáveis privadas, e 
    atualizar (countJokesCall) seu estado ou preservalo (instance)
*/
const createApiChunkNorris = () => {
    const instance = \`Instância criada em \${new Date().toISOString()}\`;
    let countJokesCall = 0;

    const getJokesRandom = async (): Promise<Joke> => {
        countJokesCall++;
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Failed to fetch jokes');
        }
        return response.json();
    };

    const getInstance = () => instance;
    const getCountJokesCall = () => countJokesCall;

    return {
        getJokesRandom,
        getInstance,
        getCountJokesCall,
    };
};

//Exporta Singleton (uma única instância da API)
export const apiChunkNorris = createApiChunkNorris();

/*
    cria hook usando método do Singleton no paramêtro queryFn de useQuery, 
    boa prática usar useQuery para preservar estado, tratar erro e manipular loading
*/
export const useGetJokesRandom = () => {
    return useQuery({ 
        queryKey: ['jokesRandom-2'], 
        queryFn: () => apiChunkNorris.getJokesRandom()
    });
};

//cria componente de exemplo com uso do hook useGetJokesRandom
const ChunkJoke: React.FC = () => {
    const { data, error, isLoading } = useGetJokesRandom();

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <div className="p-2">
            <img src={data?.icon_url} />
            <p>id: {data?.id}</p>
            <p className="text-3xl">{data?.value}</p>
        </div>
    );
}

const ExampleSingletonClosure: React.FC = () => {
    const alertCountJokes = useCallback(() => {
        alert("Counts: " + apiChunkNorris.getCountJokesCall() +
               ", " + apiChunkNorris.getInstance());
    }, []);

    const callGetJokesRandom = useCallback(() => apiChunkNorris.getJokesRandom(), []);

    return (
        <div className="p-2">
            <ChunkJoke />
            <p>{apiChunkNorris.getInstance()}</p>
            <div><a onClick={alertCountJokes}>Click para ver quantas requests</a></div>
            <div><a onClick={callGetJokesRandom}>Fetch Manual</a></div>
        </div>
    );
}

export default ExampleSingletonClosure;`;

export const exampleSingletonClosureRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-[50%]'>
    <ExampleSingletonClosure />
</div>`;