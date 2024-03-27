import { useToggle } from './useToggle'; // Importing useToggle custom hook
import { useState } from 'react'; // Importing useState hook from React

// Custom hook useAsyncToggle definition
export const useAsyncToggle = (url, options) => {
    const [state, toggle] = useToggle(); // Using the useToggle hook to manage a toggle state
    const [error, setError] = useState(null); // Using useState hook to manage error state

    // asyncToggle function definition
    const asyncToggle = () => {
        setError(null); // Clear any previous errors

        let currentPromise = fetch(url, {method: "POST"}); // Initiating a POST request using fetch API

        // Handling optimistic updates if enabled
        if (options?.optimistic) {
            toggle(); // Toggling state immediately
            currentPromise = currentPromise.then((res)=> {
                if (!res.ok)    {
                    throw res; // Throw an error if the response is not okay
                }
            });
            currentPromise = currentPromise.catch((err) => {
                toggle(); // Revert the toggle if an error occurs
                throw err; // Re-throw the error
            });
        } else {
            // Toggle after successful completion of the request if optimistic updates are not enabled
            currentPromise = currentPromise.then(() => toggle());
        }

        // Handling any errors from the request
        currentPromise.catch((err) => {
            console.log(err); // Logging the error for debugging purposes
            setError(`Error! Code: ${err.status}`); // Setting error state with the error status
        });
    };

    // Returning state, asyncToggle function, and error for external use
    return [state, asyncToggle, error];
};