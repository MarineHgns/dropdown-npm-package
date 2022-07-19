import React from 'react';
import './index.css'
import PropTypes from "prop-types";

const Dropdown = ({ label, options, id, handleFormChange }) => {
    return (
        <div className='dropdown'>
            <label>{label}</label><br/>
                <select className="dropdown-list" autoComplete='country-name' id={id}
                    onChange={handleFormChange}
                    required>
                    {options.map((option) => (
                        <option value={option.value} key={option.abbreviation}>{option.name}</option>
                    ))}
                </select>
        </div>
    );
  };
  
  export default Dropdown;

  Dropdown.protoTypes = {
    label : PropTypes.string.isRequired,
    options : PropTypes.arrayOf(PropTypes.object).isRequired,
    id : PropTypes.string.isRequired,
    handleFormChange : PropTypes.func.isRequired
}