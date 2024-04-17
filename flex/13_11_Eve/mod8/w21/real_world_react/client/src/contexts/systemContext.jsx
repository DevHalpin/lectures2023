import { createContext, useContext, useEffect, useState } from "react";

export const SystemsContext = createContext([]);

const useFetchSystemData = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((dataObject) => {
        setSystems(dataObject.data);
      });
  },[]);

  return {systems} ;
};

export const useSystem = () => {
  return useContext(SystemsContext);
};

export const SystemProvider = (props) => {
  const {systems} = useFetchSystemData();

  return (
    <SystemsContext.Provider value={systems}>
      {props.children}
    </SystemsContext.Provider>
  );
};
