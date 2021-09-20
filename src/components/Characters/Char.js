import React from 'react';

const Char = (props) => {
    const imageStyle = {
      width: "100%",
      height: "400px"
    }
    const divStyle = {
      border: "1px solid black",
      backgroundColor: "lavender"
    }
    return(
      <div className="char" style={divStyle}>
        <img style={imageStyle} src={props.img} alt="" />
        <h3>{props.name}</h3>
        <h4 style={{color: "dimgray"}}>{props.nickname}</h4>
      </div>
    );
  }
  

export default Char;