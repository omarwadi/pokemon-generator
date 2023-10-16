'use client'
import React, { useState } from 'react';

interface DropdownMenuProps {
  options: string[];
  header:string;
  handelDropdownSubmit: (headerValue: string, selectedValue: string) => void;
  value: string
  
}

export default function DropdownMenu({ options, header, handelDropdownSubmit, value }: DropdownMenuProps) {
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handelDropdownSubmit(header.toLowerCase(), e.target.value);
  };

  return (
    <div className="dropdownContainer" id="dropdown_div">
      <label >{header}:</label>
      <div className='selectContainer'>
        <select value={value} onChange={handleSelectChange} className='select' required>
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

