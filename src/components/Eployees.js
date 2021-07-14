import React from "react";
import Employee from "./Employee";
import employees from "../data/employees";

class  Employees extends React.Component {
  constructor(){
    super();
    this.state={
      index: 0,
      infos: employees,
      team:[]
    };
     this.clickHandler= this.clickHandler.bind(this);
  }
  mapping(x){
    const items = x.map((item)=>{
      return <Employee info={item} key={item.id}/>
     });
     return items;
  }
  clickHandler(){
    // this.listing();
     this.setState((prevState) => {
      return {index: prevState.index+1}
     })
    this.state.team.push(employees[this.state.index])

    console.log(this.state.team)
  
  }
  listing(){
    console.log(this.mapping()[this.state.index]);
      this.setState((prevState)=>{
        return{team: prevState.team.push(this.mapping()[this.state.index])}
      })
    
  }
  render(){
  return (
    <div className="row">
      {" "}
      {this.mapping(this.state.team)}  
               
      <br />{" "}
      <button className="btn btn-primary" id="theSubmit" onClick={this.clickHandler }>
        Show next
      </button>
    </div>
  );}
}

export default Employees;
