import React, {Component} from 'react'

class Employee extends Component {
   
    render(){
    return(
        <div className="col-md-3 col-sm-6">
            <div  className="card">
            <div className="card-body bg-dark border-light" >
                <img className="card-img-top" src={this.props.info.img} alt={`${this.props.info.nom}`} style={{maxWidth:'100%'}}/>
                <h4 className="card-title"> {this.props.info.nom} {this.props.info.prenom}</h4>
                <div className="card-text">   
                <div className="text">Emai: {this.props.info.email}</div>
                <div className="text" >Tél:  {this.props.info.tel}</div>
                {this.props.info.description}</div>
                <div></div>
            </div>
            </div>
        </div>
     
    )}
}

export default Employee;