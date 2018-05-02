import { Calendar } from 'antd';
import React, { Component } from 'react';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

class AoCalendar extends Component {
    render() {
       return (<Calendar onPanelChange={onPanelChange}/>)
    }

}

export default AoCalendar;