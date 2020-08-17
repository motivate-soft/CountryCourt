import React from "react";
import { Layout, Menu } from 'antd';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Cases from '../pages/case';

import {
    FolderOpenOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import AppHeader from './AppHeader';

const { Sider } = Layout;

class AppSideBar extends React.Component {
    state = {
        collapsed: false,
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            < BrowserRouter >
                <Sider
                    trigger={null} collapsible collapsed={this.state.collapsed}
                    className="layout-sider">
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                    <Menu defaultSelectedKeys={['_cases']} mode="inline">
                        <Menu.Item key="_cases" icon={<FolderOpenOutlined />}>
                            <Link to="/cases">Cases</Link>
                        </Menu.Item>
                    </Menu>

                </Sider>
                <div style={{ width: "100%", height: "90vh" }}>
                    <AppHeader />
                    <Switch>
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route path="/cases" component={Cases} />
                    </Switch>
                </div>

            </ BrowserRouter>
        );
    }
}

export default AppSideBar;