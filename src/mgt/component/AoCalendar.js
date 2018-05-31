import { Calendar } from 'antd';
import PostTitle from './blog/PostTitle'
import React, { Component } from 'react';
import styled from 'styled-components';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

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
    render() {
       return (<Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange}/>)
    }

}

export default AoCalendar;