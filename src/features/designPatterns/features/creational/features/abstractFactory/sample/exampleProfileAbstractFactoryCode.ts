export const exampleProfileAbstractFactoryCode = 
`//*
  Caracteristicas compartilhas entre nossos componentes
  criamos as interface abaixo para garantir que
  nao vamos criar um componente invalido
*/
enum Profiles {
    ADMIN = 'ADMIN',
    BUYER = 'BUYER',
    SELLER = 'SELLER',
}

interface AbstractProfile {
  style: string;
  type: Profiles;
  goToProfile: () => void;
}

type NavigateType = (url: string) => void;

interface AbstractProfileFactory {
  createProfile: () => AbstractProfile;
}

interface ProfileProps {
  factory: AbstractProfileFactory;
}

const navigateLocation = (url: string) => {
  location.assign(url);
}

/* Fábrica modelo de perfil, isso reduz repetição e mantém a o princípio DRY */
const createProfileFactory = (
  type: Profiles,
  style: string,
  path: string,
  navigate: NavigateType,
): AbstractProfileFactory => ({
  createProfile: () => ({
    style,
    type,
    goToProfile: () => {
      navigate(path);
    },
  }),
});


/*
  Nossas funcoes fabricas abaixo criam
  componentes que compartilhar caracteristicas
  e garantimos a correta implementacao atraves de 
  interfaces.
*/

const AdminProfileFactory = (navigate: NavigateType) =>
  createProfileFactory(Profiles.ADMIN, "profile-admin bg-blue", "/perfil/admin", navigate);

const BuyerProfileFactory = (navigate: NavigateType) =>
  createProfileFactory(Profiles.BUYER, "profile-buyer", "/perfil/buyer", navigate);

const SellerProfileFactory = (navigate: NavigateType) =>
  createProfileFactory(Profiles.SELLER, "profile-seller", "/perfil/seller", navigate);


/*
  Esse Componente tem a responsabilidade 
  de renderizar o comportamento padrao de qualquer
  componente que compartilhe o comportamento 
  definido nas interfaces
*/
const ProfileUser = (props: ProfileProps) => {
  const { factory } = props;
  const { style, type, goToProfile } = factory.createProfile();
  return (
    <div className={style}>
      <button onClick={() => goToProfile()}>{type}</button>
    </div>
  );
}
/*
  Agora podemos carregar nossos perfils em qualquer contexto necessario. Seguindo as interfaces podemos 
  ate criar novos perfis com seguranca que nao vamos quebrar o comportamento esperado.
  Reparem na injeção de dependência de navigate para a Factory, evitando efeito colateral direto no domínio, 
  poderia ser um navigate do useNavigate do react-router. Melhor injetar o comportamento, 
  tornando-o testável e desacoplado do ambiente global
*/
const ExampleProfileAbstractFactory:React.FC = () => {
  return (
    <div>
      <ProfileUser factory={AdminProfileFactory(navigateLocation)} />
      <ProfileUser factory={BuyerProfileFactory(navigateLocation)} />
      <ProfileUser factory={SellerProfileFactory(navigateLocation)} />
    </div>
  );
}

export default ExampleProfileAbstractFactory;`;

export const exampleProfileAbstractFactoryRenderCode = 
`<div className='flex mt-6 mb-6'>
  <ExampleProfileAbstractFactory />
</div>`;