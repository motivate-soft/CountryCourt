import React from "react";
import { Row, Col, Table, Upload, Button, Divider } from 'antd';
import { SelectOutlined, DownloadOutlined, SearchOutlined, MoreOutlined } from '@ant-design/icons';
import DeniedReason from '../../dialogs/DeniedReason'
import AcceptedReason from '../../dialogs/AcceptedReason'

const { Dragger } = Upload;


//---------------dummy datas---------------
const columns = [
    {
        title: 'Document',
        dataIndex: 'document',
        key: 'doc',
    },
    {
        title: 'Filed by',
        dataIndex: 'filed_by',
        key: 'filed_by',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => (
            <span style={{ fontWeight: 600, color: "black" }}>{status}</span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div size="small">
                <a>View File</a>
                <Divider type="vertical" style={{ background: 'grey' }} />
                <a>Change Status</a>
            </div>
        ),
    },
];

const data = [
    {
        key: '1',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Objected',
    },
    {
        key: '2',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Not Objected',
    },
    {
        key: '3',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Not Objected',
    },
    {
        key: '4',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Not Objected',
    },
    {
        key: '5',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Not Objected',
    },
    {
        key: '6',
        document: 'Objection',
        filed_by: 'B.L.Rabbit',
        date: '1 December 2019',
        status: 'Not Objected',
    },
];
//-----------------------------------------

class CourtFile extends React.Component {

    state = {
        deniedReasonModalVisible: false,
        acceptedReasonModalVisible: false
    };

    onDenyClicked = () => {
        console.log("clicked");
        this.setState({
            deniedReasonModalVisible: true,
        });
    };

    DenyModalOk = e => {
        console.log(e);
        this.setState({
            deniedReasonModalVisible: false,
        });
    };

    DenyModalCancel = e => {
        console.log(e);
        this.setState({
            deniedReasonModalVisible: false,
        });
    };

    onAcceptClicked = () => {
        console.log("clicked");
        this.setState({
            acceptedReasonModalVisible: true,
        });
    };

    AcceptModalOk = e => {
        console.log(e);
        this.setState({
            acceptedReasonModalVisible: false,
        });
    };

    AcceptModalCancel = e => {
        console.log(e);
        this.setState({
            acceptedReasonModalVisible: false,
        });
    };

    render() {
        return (
            <div className="box">
                <p className="box-title1">
                    Overview
                </p>
                <Row gutter={[20]}>
                    <Col span={24} md={16}>
                        <div>
                            <Table
                                style={{ borderTopColor: "#D9D9D9", borderTopStyle: 'solid', borderTopWidth: 1, paddingTop: 20 }}
                                pagination={false}
                                rowSelection={{ type: 'radio' }}
                                columns={columns}
                                scroll={{ x: 750 }}
                                dataSource={data} />
                            <br />
                        </div>
                    </Col>
                    <Col span={24} md={8}>
                        <div style={{ borderTopColor: "#D9D9D9", borderTopStyle: 'solid', borderTopWidth: 1 }}>
                            <Row style={{ paddingTop: 8, paddingBottom: 8 }} align="middle" justify="space-between">
                                <span className="box-title1">
                                    Objection verdict
                                </span>
                                <div>
                                    <Button type="primary" style={{ marginRight: 12 }} ghost onClick={this.onDenyClicked}>Deny</Button>
                                    <DeniedReason
                                        visible={this.state.deniedReasonModalVisible}
                                        onOk={this.DenyModalOk}
                                        onCancel={this.DenyModalCancel} />
                                    <Button type="primary" ghost onClick={this.onAcceptClicked}>Accept</Button>
                                    <AcceptedReason
                                        visible={this.state.acceptedReasonModalVisible}
                                        onOk={this.AcceptModalOk}
                                        onCancel={this.AcceptModalCancel} />
                                </div>
                            </Row>

                            <div style={{ height: "100%", padding: 10, borderColor: "#D9D9D9", borderStyle: 'solid', borderWidth: 1 }}>
                                <div style={{ textAlign: 'end' }}>
                                    <Button className="button1" type="default" shape="circle" icon={<DownloadOutlined />} size="middle" />
                                    <Button className="button1" type="default" shape="circle" icon={<SearchOutlined />} size="middle" />
                                    <Button className="button1" type="default" shape="circle" icon={<MoreOutlined />} size="middle" />
                                </div>
                                <Divider style={{ margin: "10px 0" }} />
                                <div style={{ paddingLeft: 55, paddingRight: 55, paddingTop: 80, paddingBottom: 30 }}>
                                    <Dragger>
                                        <p className="ant-upload-drag-icon">
                                            <SelectOutlined style={{ color: '#595959' }} />
                                        </p>
                                        <p className="ant-upload-text">Select 'View File' to display document</p>
                                        <br />
                                    </Dragger>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default CourtFile;