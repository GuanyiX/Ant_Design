import React from 'react';
import { Layout } from 'antd';

const { Sider, Content } = Layout;


class SideBar extends React.Component {

    constructor() {
        super()

        this.state = {
            collapsed: false
        }
    }

    handleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.handleCollapse}
                    width={300}
                >
                    {this.state.collapsed && <p>Hello world</p>}
                    {!this.state.collapsed && <p>Collapsed</p>}
                </Sider>
                <Content>Can you see me?</Content>
            </Layout>
        )


    }

}

export default SideBar;
