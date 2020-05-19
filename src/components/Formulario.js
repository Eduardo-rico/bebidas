import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  // console.log(categorias);

  //state local de la busqueda del usuario
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: ""
  });

  //funcion para obtener los datos del formulario

  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className='col-12'
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className='text-center'>
        <legend>Busca bebidas por categoria o ingrediente</legend>
      </fieldset>
      <div className='row'>
        <div className='col-md-4'>
          <input
            name='nombre'
            className='form-control'
            type='text'
            placeholder='Buscar por ingrediente'
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='categoria'
            onChange={obtenerDatosReceta}
          >
            <option value=''>--Selecciona Categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Buscar bebidas'
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
