import React from 'react'

function Text(){
    const title ={
        designer: 'red',
        programmer : 'blue'
    }
    const me= "programmer";
    return(
        <p>
            Graphic and Web <span style={me === "designer"? {color:title.designer} : {color:title.programmer}}> design </span> are far more than a job for me. Thanks to my extensive technical knowlege, I can implement my creative ideas very well, so that I can offer tailor-made solutions for customers.
        </p>
    );
}

export default Text;