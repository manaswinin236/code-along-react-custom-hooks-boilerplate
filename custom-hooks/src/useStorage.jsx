import { useState, useEffect } from 'react';
import './App.css'
const useStorage = (key, initialValue) => {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;