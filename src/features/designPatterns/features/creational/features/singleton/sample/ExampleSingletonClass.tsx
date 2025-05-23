import { useQuery } from "@tanstack/react-query";

type Joke = {
    icon_url: string;
    id: string;
    value: string;
}

//cria Singleton centralizando chamadas de api, 
//reparem que terá somente uma única instância de ApiChunkNorris
class ApiChunkNorris {
  private constructor() {}
  
  static instance: ApiChunkNorris;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ApiChunkNorris();
    }
    return this.instance;
  }

  async getJokesRandom(): Promise<Joke> {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) {
        throw new Error('Failed to fetch jokes');
    }
    return response.json();
  }

  async getCategories(): Promise<string[]> {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  }
}

//exportação para ponto de acesso global para essa instância ser usada na aplicação
export const apiChunkNorris = ApiChunkNorris.getInstance();

/*
    cria hook usando método do Singleton no paramêtro queryFn de useQuery, 
    boa prática usar useQuery para preservar estado, tratar erro e manipular loading
*/
export const useGetJokesRandom = () => {
    return useQuery({ 
        queryKey: ['jokesRandom'], 
        queryFn: () => apiChunkNorris.getJokesRandom()
    });
};

export const useGetCategories = () => {
    return useQuery({ 
        queryKey: ['categories'], 
        queryFn: () => apiChunkNorris.getCategories()
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

const Categories: React.FC = () => {
    const { data, error, isLoading } = useGetCategories();

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <>
        <strong>Categories:</strong>
        <ol className="list-[inline]">
            {data?.map(
                categorie => <li key={categorie} className="inline-block m-1">{categorie}</li>
            )}
        </ol>
        </>
    );
}

/*
    Reparem que criei um componente para cada chamada ao api (ChunkJoke e Categories), 
    isso é uma boa prática pois cada componente tem uma responsabilidade específica,
    seguindo o SRP para ter apenas 1 motivo para renderizar/mudar o componente
*/
const ExampleSingletonClass: React.FC = () => {
    return (
        <div className="p-2">
            <ChunkJoke />
            <Categories />
        </div>
    );
}

export default ExampleSingletonClass;