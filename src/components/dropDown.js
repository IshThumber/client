import React, { useState } from 'react'

const DropDown = () => {
    const options = [
        { label: "Choose a Class", value: "0" },
        { label: "Class 1", value: "1" },
        { label: "Class 2", value: "2" },
        { label: "Class 3", value: "3" },
        { label: "Class 4", value: "4" }
    ];

    const [value, setValue] = useState("class");

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div className="page">
            <div className="page-container">
                <label>
                    Class:
                    <select className="label" value={value} onChange={handleChange}>
                        {options.map(option => (<option value={option.value}>{option.label}</option>))}
                    </select>
                </label>

            </div>
            <div>
                {
                    value === '1' ?
                        <div>First</div> :
                        value === '2' ?
                            <div>Second</div> :
                            value === '3' ?
                                <div>Third</div> :
                                value === '4' ?
                                    <div>Forth</div> :
                                    <div>Choose</div>
                }
            </div>
        </div>
    );
}

export default DropDown;