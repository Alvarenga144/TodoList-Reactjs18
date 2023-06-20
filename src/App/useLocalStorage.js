import React from "react";

function useLocalStorage(itemName, initialValue) {
    // States
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        // LocalStorage
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItems);
        }
    });

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);
    };

    return {
        item, 
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };