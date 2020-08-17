import React from "react";
import { Tabs, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { FolderOpenOutlined, PlusCircleOutlined } from '@ant-design/icons';

import Overview from './Overview'
import CourtFile from './CourtFile'
const { TabPane } = Tabs;

class Cases extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-header" style={{ height: 80 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Cases</Breadcrumb.Item>
                        <Breadcrumb.Item> </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="page-title">Tim Tom Ltd v. Too Too Pty Ltd</p>
                </div>
                <Tabs onChange={this.onTabChanged} defaultActiveKey={"my_cases"}
                    tabBarExtraContent={<Button type="primary">Return to Imanage</Button>}
                    style={{ background: 'white' }}>
                    <TabPane
                        tab={
                            <span>
                                <Link to={{
                                    pathname: `/cases`,
                                    query: { tabKey: 'overview' }
                                }}>
                                    <FolderOpenOutlined />
                                    Overview
                                </Link>

                            </span>
                        }
                        key="overview"
                    >
                        <Overview />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Link to={{
                                    pathname: `/cases`,
                                    query: { tabKey: 'court_file' }
                                }}>
                                    <PlusCircleOutlined />
                                    Court File
                                </Link>
                            </span>
                        }
                        key="court_file"

                    >
                        <CourtFile />
                    </TabPane>
                </Tabs>
            </div>

        );
    }
}

export default Cases;