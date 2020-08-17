import React from 'react';
import { Modal, Button, Form, Input, Divider } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
const { TextArea } = Input;

class AcceptedReason extends React.Component {

    onSave = () => {
        //save applicants to server
        this.props.onOk()
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                header={null}
                footer={null}
                width={"35%"}
                style={{ minWidth: 522, padding: 0 }}
            >
                <div className="title" style={{ padding: "15px 24px" }} >
                    <span>Reason for Obection Verdict</span>
                </div>
                <Divider style={{ background: '#f0f0f0', height: 2 }} />
                <Form
                    style={{ padding: "1px 24px" }}
                    layout="vertical"
                    onFinish={this.onSave}
                >
                    <div className="box2">
                        <CheckCircleFilled style={{ color: '#52C41A', margin: "0 8px" }} />You have <span style={{ fontWeight: 'bold' }}>ACCEPTED the Objection</span>.
                        Please provide reasoning below.
                    </div>
                    <div className="info-text" style={{ textAlign: "center", padding: "22px 50px" }}>
                        <span>
                            If you would like to change the verdict, cancel out of this window and select ‘Deny’.
                        </span>
                    </div>

                    <Divider style={{ background: '#f0f0f0', height: 2 }} />

                    <Form.Item name="reason">
                        <TextArea style={{ padding: "20px 15px", height: 200 }} placeholder="Start typing the reason for Objection Verdict here...." />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button onClick={this.props.onCancel} style={{ marginRight: 10 }}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Save Verdict
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

export default AcceptedReason;