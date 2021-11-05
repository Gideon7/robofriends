import React from "react";

export const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Friends' onChange={searchChange}/>
        </div>
    )
}