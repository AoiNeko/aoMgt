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

    getDayContent() {
        const {date}  =  this.props.match.params
        return [{id: '1' ,title: "post1", abstract: "this is abstract of post 1"},
        {id:'2', title: "post2", abstract: "this is abstract of post 2"}]
    }

    render() {
        const dayPosts = this.getDayContent(this.props.date)

        return (<Layout><Header> 
                <Button type="primary" onClick={this.backToCalendar}>首页</Button>
            </Header>
            <Content><PostList postData={dayPosts}  history={this.props.history}> </PostList></Content>
            </Layout>)
    }
}

export default DayPage