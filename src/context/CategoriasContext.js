import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear el context
export const CategoriasContext = createContext();

//Provider donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
  //crear el state del context
  const [categorias, guardarCategorias] = useState([]);

  //ejecutar llamado a la api
  useEffect(() => {
    //obtener categorias
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };

    obtenerCategorias();
  }, []);

  return (
    //esto estara disponible para los hijos
    <CategoriasContext.Provider
      value={{
        //esto estará en donde se usen los componentes
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
