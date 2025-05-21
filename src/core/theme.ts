import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
    hashed: false,
    token: {
        colorTextBase: '#FFFFFF',
        colorBgBase: '#000000',
    },
    components: {
        Timeline: {
            colorText: '#FFF',
            dotBg: '#FFFFFF00',
            tailColor: '#FFFFFF55'
        }
    }
}

export default theme;
