import React from "react";
import Employee from "./Employee";
class  Employees extends React.Component {
  constructor(){
    super();
    this.state={
      infos: [
 
        {
          id:"1",
          nom:"saadoun",
          prenom: "soumia",
          img: "https://picsum.photos/120",
          email:"es_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Flutter developer"
      },
      
      {
        id:"2",
          nom:"saadoun",
          prenom: "mohamed bakir",
          img: "https://picsum.photos/121",
          email:"med_bakir_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Full stack developer"
      },
      {
        id:"3",
          nom:"saadoun",
          prenom: "aya",
          img: "https://picsum.photos/122",
          email:"aya_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"designer"
      },{
        id:"4",
          nom:"saadoun",
          prenom: "soumia",
          img: "https://picsum.photos/120",
          email:"es_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Flutter developer"
      },
      
      {
        id:"5",
          nom:"saadoun",
          prenom: "mohamed bakir",
          img: "https://picsum.photos/121",
          email:"med_bakir_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Full stack developer"
      },
      {  id:"6",
          nom:"saadoun",
          prenom: "aya",
          img: "https://picsum.photos/122",
          email:"aya_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"designer"
      },{  id:"7",
          nom:"saadoun",
          prenom: "soumia",
          img: "https://picsum.photos/120",
          email:"es_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Flutter developer"
      },
      
      {
        id:"8",
          nom:"saadoun",
          prenom: "mohamed bakir",
          img: "https://picsum.photos/121",
          emai:"med_bakir_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"Full stack developer"
      },
      {  id:"9",
          nom:"saadoun",
          prenom: "aya",
          img: "https://picsum.photos/122",
          email:"aya_saadoun@esi.dz",
          phone:"+213698554743",
          bio:"designer"
      }
       ]
    }
  }
  mapping(){
    const items = this.state.infos.map((item)=>{
      return <Employee info={item} key={item.id}/>
     });
     return items;
  }
  render(){
  return (
    <div className="row">
      {" "}
      {this.mapping()}  
               
      <br />{" "}
      <button className="btn btn-primary" id="theSubmit">
        Submit
      </button>
    </div>
  );}
}

export default Employees;
