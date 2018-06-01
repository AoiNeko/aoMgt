import React, { Component } from 'react'
import AoCalendar from './component/AoCalendar'
import DayPage from './component/DayPage'


class Mgt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dispayMode: "index"                
        }
        this.setMgtDispay =  this.setMgtDispay.bind(this)
    }

    setMgtDispay(mode) {
        this.setState({
            dispayMode: mode
        })
    }
    
     render() {
        if(this.state.dispayMode == "index") {
            return (<AoCalendar setMgtDispay={this.setMgtDispay}/>)
        }
        else {
            return (<DayPage />)
        }
     }
}


export default Mgt;