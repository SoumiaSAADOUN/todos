import React from "react";
import Employee from "./Employee";
function Employees() {
 const infos= [
 
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
 ];
 const items =infos.map((item)=>{
  return <Employee info={item} key={item.id}/>
 });
  return (
    <div className="row">
      {" "}
      {items}
    
      
      {/* <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" />
      <Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" /> */}
      {/* <table className="table">
                <tbody>
                  
                    <tr>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120" /></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                    </tr>
                    <tr>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/120"/></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                        <td><Employee nom="facebook" prenom=" " description="" img="https://picsum.photos/121"/></td>
                    </tr>
                </tbody>
            </table>        */}
   
      <br />{" "}
      <button className="btn btn-primary" id="theSubmit">
        Submit
      </button>
    </div>
  );
}

export default Employees;
