import React, { useEffect, useState } from 'react';
import './App.css';
import { groupBy } from './groupBy';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchBy, setSearchBy] = useState(false);
  const [groupedData, setGroupedData] = useState(new Map());

  useEffect(() => {
    let fieldName
    searchBy ? fieldName = "firstName" : fieldName = "lastName"
    setGroupedData(groupBy(fieldName, inputValue));
  }, [inputValue, searchBy]);

  return (
    <>
      <div className='formContainer'>
        <div className='searchByContainer'>
          <h3><u>Search By:</u></h3>
          {searchBy ? <button id='firstNameButton' onClick={() => setSearchBy(false)}>First Name</button> : <button id='lastNameButton' onClick={() => setSearchBy(true)}>Last Name</button>}
        </div>
        <input 
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={`Search people`}
        />
      </div>
      <div className='peopleContainer'>
        {Array.from(groupedData).map(([key, peopleArray], mapIndex) => (
          <div className='peopleGroup' key={`${key}-${mapIndex}`}>
              <h3>{key}</h3>
              {peopleArray.map(({ firstName, lastName }, personIndex) => {
                const uniqueKey = `${firstName}-${lastName}-${personIndex}`;
                return (
                  <p key={uniqueKey}>
                    {firstName} {lastName}
                  </p>
                );
              })}
          </div>
        ))}
      </div>
    </>
    );
}

export default App
