import React from 'react'


export default function DropdownMenu() {

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value="sd">
        <option value="">Select an option</option>
          <option key="a" value="as">
            as
          </option>
      </select>
        <p>You selected: </p>
    </div>
  )
}
