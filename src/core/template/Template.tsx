import { Image, Layout, theme } from "antd";
import type { ReactElement } from "react";
import type React from "react";
import SiderMenu from "./components/siderMenu/SiderMenu";

const { Header, Content, Footer, Sider } = Layout;

type ITemplate = {
    children: ReactElement
}

const Template: React.FC<ITemplate> = ({ children }) => {
    const { token: { colorBgContainer, sizeXXS } } = theme.useToken();

    return (
        <Layout className="size-full min-h-screen!">
            <Header className="bg-[url(/images/header_bg.svg)]! h-[50px]!">
                {/* <HeaderContent /> */}
            </Header>
            <Layout>
                <Sider className={`bg-[${colorBgContainer}]!`}>
                    <Image src="/images/logo.png" preview={false} />
                    <SiderMenu />
                </Sider>
                <Layout style={{ overflow: 'initial' }}>
                    <Content className={`p-${sizeXXS}`} >
                        {children}
                    </Content>
                    <Footer className="align-middle text-center bg-gray-900!">
                        Powered by &nbsp; <a href="https://silveiracamilo.com.br" target="_blank">silveiracamilo.com.br</a>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Template;
