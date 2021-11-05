import React from "react";
import {Card} from './Card';

 
export const CardList = ({users}) => {
    console.log(users)
    const usersList = users.map((users, i) => {
        return (<Card 
        key = {i} 
        id={users.id} 
        name = {users.name} 
        email = {users.email}/>)
    });
    return (
        <div>
            {usersList}
        </div>
    )
}