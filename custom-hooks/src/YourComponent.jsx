import React from 'react';
import useStorage from './useStorage'; // Path to your useStorage file
import './App.css'
const YourComponent = () => {
  const [inputValue, setInputValue] = useStorage('textInput', ''); // Replace 'textInput' with your desired key

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
    </div>
  );
};

export default YourComponent;