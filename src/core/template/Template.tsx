import { Image, Layout, theme } from "antd";
import type { ReactElement } from "react";
import SiderMenu from "./components/siderMenu/SiderMenu";
import { useNavigate } from "react-router";
import AdBanner from "../../shared/components/AdBanner/AdBanner";
import { AdSlots } from "../../shared/constants/adSlots";

const { Header, Content, Footer, Sider } = Layout;

type ITemplate = {
    children: ReactElement
}

const Template = ({ children }: ITemplate) => {
    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();

    return (
        <Layout className="size-full min-h-screen!">
            <Header className="bg-[url(/images/header_bg.svg)]! bg-right! h-[50px]!">
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
                    {/* Top Advertisement Banner */}
                    <div className="px-2 sm:px-4 pt-2 sm:pt-4">
                        <AdBanner 
                            adSlotId={AdSlots.TOP_BANNER?.id || ""} 
                            position="top"
                            className="shadow-sm"
                        />
                    </div>
                    
                    <Content className={`p-4 pt-12 lg:pt-4`} >
                        {children}
                    </Content>
                    
                    {/* Bottom Advertisement Banner */}
                    <div className="px-2 sm:px-4 pb-2 sm:pb-4">
                        <AdBanner 
                            adSlotId={AdSlots.BOTTOM_BANNER?.id || ""} 
                            position="bottom"
                            className="shadow-sm"
                        />
                    </div>
                    
                    <Footer className="align-middle text-center bg-gray-900!">
                        Powered by &nbsp; <a href="https://silveiracamilo.com.br" target="_blank" rel="noopener noreferrer">silveiracamilo.com.br</a>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Template;
