import React, { Component } from 'react'
import AoCalendar from './component/AoCalendar'


function onPanelChange(value, mode) {
    console.log(value, mode);
}

class Mgt extends Component {

     render() {
        return (<AoCalendar />)
     }
}


export default Mgt;