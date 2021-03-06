import React, { Component } from 'react';
import {Layout, Button} from 'antd'
import PostList from './blog/PostList'
const {Header, Content} = Layout



class DayPage extends Component {
    constructor(props) {
        super(props)
        this.backToCalendar = this.backToCalendar.bind(this)
        this.getDayContent = this.getDayContent.bind(this)
        this.state = {
            datePosts : []
        }
        this.getDayContent()
    }

    backToCalendar() {
        this.props.history.push("/")
    }

    getDayContent() {
        const {date}  =  this.props.match.params
        alert(date)
            var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        const option = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        }
        let _this = this
        let tz = new Date().getTimezoneOffset() / 60 * -1
        fetch('/post/day/list?t='+ date + '&tz=' + tz  ,option).then((response) => {
            response.text().then((responseText) => {
                console.log(responseText)
                let res = JSON.parse(responseText)
                console.log(res)
                debugger
                _this.setState({datePosts: res.result})
            })
        })

    
    }

    render() {
        // const dayPosts = this.getDayContent(this.props.date)

        return (<Layout><Header> 
                <Button type="primary" onClick={this.backToCalendar}>首页</Button>
            </Header>
            <Content><PostList postData={this.state.datePosts}  history={this.props.history}> </PostList></Content>
            </Layout>)
    }
}

export default DayPage