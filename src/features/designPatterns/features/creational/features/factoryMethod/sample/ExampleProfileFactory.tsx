import { useMemo } from "react";

export enum Profiles {
    ADMIN,
    BUYER,
    SELLER,
}

type IExampleProfileFactory = {
    profile: Profiles;
}

/* 
nossos componentes definidos por perfil podem ter 
sua complexidade isolada
*/
const ProfileSeller = () => <h4>seller profile</h4>;
const ProfileBuyer = () => <h4>buyer profile</h4>;
const ProfileAdmin = () => <h4>admin profile</h4>;
const ProfileUnknown = () => <h4>unknown profile</h4>;

/* 
Usando o tipo do usuario conseguimos criar o componente correto 
aplicando o conceito de factory method
*/
const profileFactory = (type: Profiles) => {
    const profilesType: Record<Profiles, React.FC> = {
        [Profiles.ADMIN]: () => <ProfileAdmin />,
        [Profiles.BUYER]: () => <ProfileBuyer />,
        [Profiles.SELLER]: () => <ProfileSeller />,
    };
    return profilesType[type] || (() => <ProfileUnknown />);
}

/* 
Agora renderizamos o componente
nota-se que abstraimos completamante a complexidade de implementacao
e usando o principio SRP para ter apenas 1 motivo para renderizar/mudar o componente
*/
const ExampleProfileFactory: React.FC<IExampleProfileFactory> = ({ profile }) => {
    const Profile = useMemo(() => profileFactory(profile), [profile]);

    return (
        <div>
            <h3>My Profile</h3>
            <Profile />
        </div>
    );
}

export default ExampleProfileFactory;