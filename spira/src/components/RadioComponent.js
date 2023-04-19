import React from 'react'
import './RadioComponent.css'

function RadioComponent({value,label}) {
  return (
    <div className="radio">
        <label>
        <input
            type="radio"
            value={value}
            // checked={this.state.selectedOption === {"Other"}}
            // onChange={this.onValueChange}
        />
        {label}
        </label>
    </div>
  );
}

export default RadioComponent