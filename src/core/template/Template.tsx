import { Image, Layout, theme } from "antd";
import type { ReactElement } from "react";
import type React from "react";
import SiderMenu from "./components/siderMenu/SiderMenu";
import { useNavigate } from "react-router";

const { Header, Content, Footer, Sider } = Layout;

type ITemplate = {
    children: ReactElement
}

const Template: React.FC<ITemplate> = ({ children }) => {
    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();

    return (
        <Layout className="size-full min-h-screen!">
            <Header className="bg-[url(/images/header_bg.svg)]! h-[50px]!">
                {/* <HeaderContent /> */}
            </Header>
            <Layout>
                <Sider 
                    className={`bg-[${colorBgContainer}]!`}
                    breakpoint="lg"
                    collapsedWidth="0"
                    zeroWidthTriggerStyle={{ top: 0 }}
                >
                    <Image 
                        src="/images/logo.webp"
                        alt="Refactoring React"
                        preview={false}
                        onClick={() => navigate('/')}
                        className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 hover:rotate-[-10deg]"
                    />
                    <SiderMenu />
                </Sider>
                <Layout style={{ overflow: 'initial' }}>
                    <Content className={`p-4 pt-12 lg:pt-4`} >
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
