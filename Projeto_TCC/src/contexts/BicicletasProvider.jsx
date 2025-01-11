import React, { createContext, useState } from "react";
import axiosClient from "../utils/axios_client"; // Certifique-se de importar axiosClient

export const BicicletasContext = createContext();

export const BicicletasProvider = ({ children }) => {
  const [bicicletas, setBicicletas] = useState([]);

  const loadBicicletas = (newBicicletas) => {
    setBicicletas(newBicicletas);
  };

  return (
    <BicicletasContext.Provider value={{ data: bicicletas, loadBicicletas }}>
      {children}
    </BicicletasContext.Provider>
  );
};
