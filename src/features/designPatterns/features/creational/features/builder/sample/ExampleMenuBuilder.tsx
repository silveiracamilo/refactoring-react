import { useMemo, type JSX } from "react";

enum UserType {
    ADMIN,
    BUYER,
}
type Builder = {
    addItem: (component: JSX.Element) => Builder
    build: () => JSX.Element
}
type HeaderProps = {
  userType: UserType;
};

/**
  Criamos nossos componentes que vao ser utilizados
  de acordo com perfil do usuario assim renderizamos 
  somente o necessario 
 */
const LinkMyProducts: React.FC = () => <a>lista de produtos </a>;
const LinkMyWishList: React.FC = () => <a>lista de desejos </a>;
const LinkManagerUsers: React.FC = () => <a>gerenciar usuarios </a>;

/**
  Aqui aplicamos o builder pattern
 */
const menuBuild = (items: JSX.Element[] = []): Builder => {
    // Adiciona partes ao menu de forma dinamica
    const addItem = (component: JSX.Element) => menuBuild([...items, component]);
  
    // Funcao responsavel por criar nosso menu
    const build = () => <nav>{items}</nav>;

    return { addItem, build };
};

const Header: React.FC<HeaderProps> = ({ userType }): JSX.Element => {
  
  const menuBuilded = useMemo(() => {
    /**
     Adicionando componentes padroes no menu
    esses podem ser acessos por qualquer perfil de usuario
    */
    let menu = menuBuild()
                  .addItem(<LinkMyProducts key="products" />)
                  .addItem(<LinkMyWishList key="wishlist" />);

    // Nosso usuario admin tem acesso a um recurso exclusivo
    if (userType === UserType.ADMIN) {
      menu = menu.addItem(<LinkManagerUsers key="manager-users" />);
    }

    // aqui montamos o componente final que pode mudar baseado no perfil
    return menu.build();
  }, [userType]);
  
  return menuBuilded;
}

const ExampleMenuBuilder:React.FC = () => {
  return (
    <div>
      <Header userType={UserType.ADMIN} />
      <Header userType={UserType.BUYER} />
    </div>
  );
}

export default ExampleMenuBuilder;