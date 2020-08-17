import React from "react";
import { Row, Col, Form, Select, Input, Button, DatePicker } from 'antd';

class Overview extends React.Component {

    render() {
        return (
            <div className="box">
                <p className="box-title1">
                    Overview
                </p>
                <Row>
                    <Col span={24} md={10}>
                        <Form
                            style={{ paddingTop: 10, borderTopColor: "#D9D9D9", borderTopStyle: 'solid', borderTopWidth: 1 }}
                            layout="vertical"
                        >
                            <Form.Item name="date" label="Date of Production">
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>

                            <Form.Item name="type" label="Type of Subpoena">
                                <Select placeholder="Select">
                                    <Select.Option value="type1">Subpoena to give evidence</Select.Option>
                                    <Select.Option value="type2">Subpoena to give evidence1</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="ground" label="Grounds for Objection">
                                <Input placeholder="Input" />
                            </Form.Item>

                            <Form.Item name="medical_record" label="Medical Records">
                                <Select placeholder="Select">
                                    <Select.Option value="yes">Yes</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Add
                        </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div >


        );
    }
}

export default Overview;