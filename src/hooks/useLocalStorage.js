import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const updateLocalStorageValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(localStorageValue) : value;
      setLocalStorageValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setLocalStorageValue(JSON.parse(item));
      }
    } catch (err) {
      console.log(err);
    }
  }, [key]);

  return [localStorageValue, updateLocalStorageValue];
}
