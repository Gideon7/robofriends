import React from "react";
import { Component } from "react";
import {CardList} from '../components/CardList';
import {SearchBox} from '../components/SearchBox.js'
import '../containers/App.css'
import { Scroll } from "../components/Scroll";


export class App extends Component {
    constructor(){
        super()
        this.state = {
            users: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => {
                  this.setState({users: json})
              })
            
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
       
    }
    render() {
        const {users, searchField} = this.state
        const filteredUsers = users.filter(users => {
            return users.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (users === null){
            return <h1>No data present</h1>
        }else if (users === 0){
            return <h1>Loading, Please wait............</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f2'>FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList users={filteredUsers}/>
                    </Scroll>
                </div>
            )
        }
       
    }
   
}