import React, { Component } from 'react';
import {Layout, Button} from 'antd'
import PostList from './blog/PostList'
const {Header, Content} = Layout



class DayPage extends Component {
    constructor(props) {
        super(props)
        this.backToCalendar = this.backToCalendar.bind(this)
        this.getDayContent = this.getDayContent.bind(this)
    }

    backToCalendar() {
        this.props.history.push("/")
    }

    getDayContent(date) {
        return [{id: '1' ,title: "post1", abstract: "this is abstract of post 1"},
        {id:'1', title: "post2", abstract: "this is abstract of post 2"}]
    }

    render() {
        const dayPosts = this.getDayContent(this.props.date)

        return (<Layout><Header> 
                <Button type="primary" onClick={this.backToCalendar}>返回</Button>
            </Header>
            <Content><PostList postData={dayPosts}> </PostList></Content>
            </Layout>)
    }
}

export default DayPage