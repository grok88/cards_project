import React from 'react';
import {Routes} from './routes/Routes';
import {DevHeader} from "./dev-header/DevHeader";
import {Layout} from 'antd';

const {Header, Footer, Sider, Content} = Layout;
export const Main = () => {
    return <Layout>
        <Header >
            <DevHeader/>
        </Header>
        <Content style={{minHeight:'100vh', padding: '0 50px' }}>
            <Routes/>
        </Content>
    </Layout>
}