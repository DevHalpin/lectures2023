import { useState } from 'react'; // Importing useState hook from React

// Custom hook useToggle definition
export const useToggle = () => {
    const [state, setState] = useState(false); // Initializing state with useState hook, defaulting to false

    // toggle function definition
    const toggle = () => {
        // Updating state using functional update to ensure previous state is properly accessed
        setState((prev) => !prev);
    };

    // Returning state and toggle function for external use
    return [state, toggle];
};
