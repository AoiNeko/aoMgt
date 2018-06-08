import React, {Component} from 'react';
import {List, Avatar}  from 'antd'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Post from './Post'

const Div = styled.div`
margin-left: 1vw;
margin-right: 1vw;
`

class PostList extends Component {
    

    constructor(props) {
        super(props)
        this.postClick = this.postClick.bind(this)
    }

    postClick() {
        console.log("post click")
        
    }

    render() {
        return (<Div><List
            itemLayout="horizontal"
            dataSource={this.props.postData}
            // footer={<div>footer</div>}
            renderItem={
                item => (
                <List.Item onClick={this.postClick}>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description= {item.abstract}/>

                    <Link to={"/post/" + item.id}  >内容</Link>
                </List.Item>                  
                )
            }
            ></List>
            <Route path="/post/:id" component={Post}/>
            
            </Div>)
    }
}

export default PostList