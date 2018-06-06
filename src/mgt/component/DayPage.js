import React, { Component } from 'react';
import {Layout, Button} from 'antd'
const {Header, Content, Footer} = Layout


class DayPage extends Component {
    constructor(props) {
        super(props)
        this.backToCalendar = this.backToCalendar.bind(this)
    }
    backToCalendar() {
        alert("o")
        this.props.setMgtDispay("index")
    }
    render() {
        return (<Layout><Header> 
                <Button type="primary" onClick={this.backToCalendar}>返回</Button>
            </Header>
            </Layout>)
    }
}

export default DayPage