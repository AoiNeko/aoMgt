import { Calendar } from 'antd';
import PostTitle from './blog/PostTitle'
import React, { Component } from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
  margin-left: 0em;
  padding-left: 0em;
`

function dateCellRender(value) {
    let dateData = [{title: "biaoti"}, {title: "我哦啊后ID骄傲囧"}]
    return (
        <Ul>{
            dateData.map (data => (<PostTitle title={data.title} />))
        }</Ul>
    )
}

class AoCalendar extends Component {
    constructor(props) {
        super(props)
        this.onSelect = this.onSelect.bind(this)
        
    }

    onSelect(value, mode) {
        this.props.setMgtDispay("dayPage")
        console.log(value, mode);
    }

    render() {
       return (<Calendar dateCellRender={dateCellRender} onSelect={this.onSelect}/>)
    }

}

export default AoCalendar;