import React from "react";
import { Breadcrumb } from 'antd';


//-----------------------------------------
class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-header">
                    <Breadcrumb style={{ opacity: 0 }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="page-title">Home</p>
                </div>
                <div className="content-body">
                    <div className="box" style={{ paddingLeft: 44, paddingRight: 44 }}>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;