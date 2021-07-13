import React from 'react'

function SocaileItem(props) {

    return(
        <li className="list-group-item">
            <img src = {props.img} alt={`${props.media} icon`}/> 
            <input type="checkbox" id={props.media}></input>{" "}
            <label htmlFor={props.media}>{ props.media} </label>
        </li>
 
    )
}

export default SocaileItem;