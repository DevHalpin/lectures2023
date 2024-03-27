import { useState } from "react"; // Importing useState hook from React

// Custom hook useFetch definition
export const useFetch = (url, initialValue) => {
  // Initializing state with useState hook, representing fetched data
  const [state, setState] = useState(initialValue);
  // Initializing loading state with useState hook, indicating whether data is being fetched
  const [loading, setLoading] = useState(false);
  // Initializing error state with useState hook, representing any error that occurs during fetch
  const [error, setError] = useState(null);

  const handleFailState = (err) => {
    setError(err);
    setLoading(false);
  }

  // fetchData function definition
  const fetchData = () => {
    // Resetting state to initial value before fetching new data
    setState(initialValue);
    // Setting loading state to true to indicate that data fetching is in progress
    setLoading(true);
    // Resetting error state to null before initiating fetch
    setError(null);
    
    // Initiating a fetch request
    fetch(url)
      .then((res) => {
        // Checking if the response is okay (status code in the range 200-299)
        if (res.ok) {
          // Parsing response body as JSON
          res.json().then((data) => {
            // Updating state with fetched data
            setState(data);
            // Setting loading state to false as data fetching is complete
            setLoading(false);
          });
        } else {
            handleFailState(new Error(`Error! Code: ${res.status}`));
        }
      })
      // Handling any errors that occur during fetch operation
      .catch((err) => {
        handleFailState(err);
      });
  };

  // Returning state, loading state, error state, and fetchData function for external use
  return [state, loading, error, fetchData];
};
