import { useState, useEffect } from 'react';

export const useStorageState = (key, initialState) => {
    const [value, setValue] = useState(() => {
        const valueFromStorage = localStorage.getItem(key);
        if (valueFromStorage) return JSON.parse(valueFromStorage);
        return initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};