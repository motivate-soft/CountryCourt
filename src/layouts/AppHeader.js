import React from "react";
import { Layout, Button, Badge, Menu, Dropdown, Avatar, Row } from 'antd';
import { QuestionCircleOutlined, BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../logo.png';

const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            1st menu item
        </Menu.Item>
        <Menu.Item key="1">
            2nd menu item
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);
class AppHeader extends React.Component {
    render() {
        return (
            <Header className="header" style={{ padding: "0 10px"}}>
                <Row align="middle" justify="space-between">
                    <img src={logo} className="logo-img" alt="logo" />
                    <div>
                        <Button type="text" shape="circle" size="large" icon={<QuestionCircleOutlined className="primary" />} />
                        <Badge count={22} offset={[-5, 10]}>
                            <Button type="text" shape="circle" size="large" icon={<BellOutlined className="primary"/>} />
                        </Badge>
                        <Avatar size="small" icon={<UserOutlined />} style={{ margin: "-5px 10px 0 20px" }} />
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: 'black' }}>
                                Jackie Richards <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </Row>

            </Header>
        );
    }
}

export default AppHeader;