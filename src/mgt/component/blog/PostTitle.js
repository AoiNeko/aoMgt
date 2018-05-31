import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
    list-style-type: none
    &:hover {
        box-shadow: inset 1px 1px 4px 2px rgba(16, 134, 36, 0.28);
        background-color: rgba(16, 134, 36, 0.28);
    }
`


class PostTitle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: props.title,
            count: 0
        }
    }

    titleClick(e) {
        // alert("1")
        this.state.count++
        console.log(e)
        this.setState({
            title: '点了' + this.state.count
        })
    }

    render() {
        return (<Li onClick={this.titleClick.bind(this)} >{this.state.title}</Li>)        
    }
    
}

export default PostTitle