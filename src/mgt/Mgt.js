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
    }   
    
     render() {
        return ( 
            <Router>
            <Switch>    
                <Route exact path="/" component={AoCalendar}/>
                <Route path="/day/:date" component={DayPage}></Route>
                <Route path="/post/:id" component={Post}/>
            </Switch>
            </Router>
        )
     }
}


export default Mgt;