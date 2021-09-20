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
        <div>
          <h2>Total characters: {characters.length}</h2>
          <div className="container">
          {/*  {
              characters.map(character => console.log(character))
            } */}
              {
                
                characters.map(character => <Char 
                    key={character.char_id} 
                    character={character}>
                  </Char>)
              }
          </div>
        </div>
    );
};

export default BreakingBad;