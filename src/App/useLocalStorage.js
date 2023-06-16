import React from "react";

function useLocalStorage(itemName, initialValue) {
    // LocalStorage
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItems);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);
    };

    return [item, saveItem];
}

export { useLocalStorage };