import React from "react";

export const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', borderTop:'3px solid black', height: '100%'}}>
            {props.children}
        </div>
    )
}