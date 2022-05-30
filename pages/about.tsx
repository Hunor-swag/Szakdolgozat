import type { NextPage } from 'next'
import React from 'react';


const about: NextPage = () => {

    const handleButton = () => {
        alert("hali");
    }

    return (
      <div>
          <h1>About</h1>
          <button onClick={handleButton}>Click</button>
      </div>
    )
  }
  
  
export default about;