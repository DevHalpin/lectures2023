import {useState, useEffect} from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [state, setState] = useState({
    data: {},
    loading: false,
    errorMsg: ''
  });

  useEffect(() => {
    setState((prev) => ({...prev, loading: true}));
    axios.get(url)
    .then(result =>  {
      setState({
        data: result.data,
        loading: false,
        errorMsg: ''
      });
    })
    .catch(() => {
      setState((prev) => ({
        ...prev,
        loading: false,
        errorMsg: 'Error loading data'
      }));
    })
  }, [url]);

  return {data: state.data, loading: state.loading};
}

export default useRequest;