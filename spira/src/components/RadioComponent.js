import React from 'react'
import './RadioComponent.css'

function RadioComponent({value,label,name,onchange,checked}) {
  return (
    <div className="radio">
        <label>
        <input
            type="radio"
            value={value}
            name={name}
            onChange={onchange}
            checked={checked}
            // checked={this.state.selectedOption === {"Other"}}
            // onChange={this.onValueChange}
        />
        {label}
        </label>
    </div>
  );
}

export default RadioComponent