import React, { useEffect, useState } from 'react';
import Char from './Char';

const BreakingBad = () => {
    const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])
    return (
        <div className="container">
      {
        
        characters.map(character => <Char img={character.img} name={character.name} nickname={character.nickname}></Char>)
      }
    </div>
    );
};

export default BreakingBad;