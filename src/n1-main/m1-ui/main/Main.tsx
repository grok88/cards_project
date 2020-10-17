import React from 'react';
import {Routes} from './routes/Routes';
import {DevHeader} from "./dev-header/DevHeader";
import {Layout} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

export const Main = () => {
    return <Layout style={{minHeight: '100vh'}}>
        <Header>
            <DevHeader/>
        </Header>
        <Content style={{padding: '50px'}}>
            <Routes/>
        </Content>
    </Layout>
}