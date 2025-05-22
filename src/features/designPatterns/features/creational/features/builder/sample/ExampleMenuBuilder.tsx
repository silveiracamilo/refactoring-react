import type { JSX } from "react";

enum UserType {
    ADMIN = "ADMIN",
    BUYER = "BUYER",
}
interface Builder {
    addItem: (component: JSX.Element) => Builder
    build: () => JSX.Element
}
interface HeaderProps {
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
const menuBuild = (): Builder => {
    const items: JSX.Element[] = [];

    // Adiciona partes ao menu de forma dinamica
    const addItem = (component: JSX.Element) => {
        items.push(component);
        return builder;
    };
  
    // Funcao responsavel por criar nosso menu
    const build = () => <nav>{items}</nav>;

    const builder = { addItem, build };

    return builder;
};

const Header: React.FC<HeaderProps> = ({ userType }): JSX.Element => {
  /**
   Adicionando componentes padroes no menu
   esses podem ser acessos por qualquer perfil de usuario
 */
  let menu = menuBuild()
                .addItem(<LinkMyProducts />)
                .addItem(<LinkMyWishList />);

  // Nosso usuario admin tem acesso a um recurso exclusivo
  if (userType === UserType.ADMIN) {
    menu.addItem(<LinkManagerUsers />);
  }

  // aqui montamos o componente final que pode mudar baseado no perfil
  return menu.build();
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