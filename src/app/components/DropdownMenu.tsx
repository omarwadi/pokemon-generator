'use client'
import React, { useState } from 'react';

interface DropdownMenuProps {
  options: string[];
  header:string
  
}

export default function DropdownMenu({ options, header }: DropdownMenuProps) {
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdownContainer" style={{width:"100%", margin:"1rem 0rem 1rem 0rem"}}>
      <label >{header}:</label>
      <div className='selectContainer'>
        <select value={selectedOption} onChange={handleSelectChange} className='select' required>
          <option value="" disabled>Select...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
    </div>
  );
};

