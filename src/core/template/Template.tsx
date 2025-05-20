import { Layout, theme } from "antd";
import type { ReactElement } from "react";
import type React from "react";
import SiderMenu from "./components/siderMenu/SiderMenu";
import HeaderContent from "./components/header/Header";

const { Header, Content, Footer, Sider } = Layout;

interface ITemplate {
    children: ReactElement
}

const Template: React.FC<ITemplate> = ({ children }) => {
    const { token: { colorBgContainer, sizeXS } } = theme.useToken();

    return (
        <Layout className="w-full h-screen">
            <Header className="w-full">
                <HeaderContent />
            </Header>
            <Layout>
                <Sider className={`bg-[${colorBgContainer}]!`}>
                    <SiderMenu />
                </Sider>
                <Content className={`size-full p-${sizeXS}`}>
                    {children}
                </Content>
            </Layout>
            <Footer className="flex justify-center align-middle p-0! pt-2! bg-gray-900! h-[40px]!">
                Powered by &nbsp; <a href="https://silveiracamilo.com.br" target="_blank">silveiracamilo.com.br</a>
            </Footer>
        </Layout>
    );
}

export default Template;
