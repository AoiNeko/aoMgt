import React, { Component } from 'react'
import AoCalendar from './component/AoCalendar'
import DayPage from './component/DayPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';
import Post from './component/blog/Post'
import PostList from './component/blog/PostList';


class Mgt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dispayMode: "index" ,
            date: null             
        }
        this.setMgtDispay =  this.setMgtDispay.bind(this)
    }   

    setMgtDispay(mode, value) {
        this.setState({
            dispayMode: mode,
            date: value
        }) 
    }
    
     render() {
        return ( 
            <Router>
            <Switch>    
                <Route exact path="/" component={AoCalendar}/>
                <Route path="/day/:date" component={DayPage}></Route>
                <PostList match={{params: {id: 0}, url: ""}}></PostList>
            </Switch>
            </Router>
        )
     }
}


export default Mgt;