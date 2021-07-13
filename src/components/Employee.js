import React from 'react'

function Employee(props) {

    return(
        <div className="col-md-3 col-sm-6">
            <div  className="card">
            <div className="card-body bg-dark border-light" >
                <img className="card-img-top" src={props.info.img} alt={`${props.info.nom}'s photo`} style={{maxWidth:'100%'}}/>
                <h4 className="card-title"> {props.info.nom} {props.info.prenom}</h4>
                <div className="card-text">   
                <div className="text">Emai: {props.info.email}</div>
                <div className="text" >Tél:  {props.info.tel}</div>
                {props.info.description}</div>
                <div></div>
            </div>
            </div>
        </div>
        // <li className="list-group-item">
        //     <img src = {props.img} alt={`${props.media} icon`}/> 
        //     <input type="checkbox" id={props.media}></input>{" "}
        //     <label htmlFor={props.media}>{ props.media} </label>
        // </li>
 
    )
}

export default Employee;