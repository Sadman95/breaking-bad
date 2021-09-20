import React from 'react';

const Char = (props) => {
  console.log(props.character.portrayed);
    const {img, name, nickname, occupation} = props.character;
    const imageStyle = {
      width: "100%",
      height: "400px"
    }
    const divStyle = {
      border: "1px solid black",
      backgroundColor: "lavender"
    }
    const listStyle = {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      justifyContent: "center",
      padding: "0px",
      marginTop: "32px"
    }
    return(
      <div className="char" style={divStyle}>
        <img style={imageStyle} src={img} alt="" />
        <h3>{name}</h3>
        <h4 style={{color: "dimgray"}}>{nickname}</h4>
        <ul style={listStyle}>{occupation.map(item => <li>{item}</li>)}</ul>
      </div>
    );
  }
  

export default Char;