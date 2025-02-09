import React from 'react';
import '../globals.css';
const Header = () => {
  return (
    <header>  
      <div className="left">
        <p>Total</p>
        <p>CO2 Removing</p>
        <p><strong>100.3</strong>kg</p>
      </div>
      <div className="right">
       <p>My trees
        <input type="number" value={14} readOnly/>
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2 2H0C0 5.86562 3.13438 9 7 9V13.5C7 13.775 7.225 14 7.5 14H8.5C8.775 14 9 13.775 9 13.5V9C9 5.13438 5.86562 2 2 2ZM14 0C11.3687 0 9.08125 1.45312 7.88438 3.6C8.75 4.54375 9.39062 5.69063 9.72812 6.9625C13.25 6.59688 16 3.62188 16 0H14Z" fill="#2E6305"/>
        </svg>
       
       </p>
       <p><strong>19</strong></p>
       <p>rainny cloud icon</p>
       <p><strong>Rain</strong></p>

      </div>
    </header>
  );
};


export {Header};
