// Formulario no controlado:

import { useRef } from "react";

const FormNoControlado = () => {
    const formulario = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const datos = new FormData(formulario.current);

        const objetoDatos = Object.fromEntries([...datos.entries()]);
        console.log(objetoDatos);

        const { todoDescripcion, todoName } = objetoDatos;
        if(!todoDescripcion.trim() || !todoName.trim()) {
            console.log("erraste chango");
            return
        }

        console.log("ta to2 peola");
    };

  return (
    <>
        <h2>No controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input
                name="todoName"
                placeholder="Ingrese To Do"
                type="text"
                className="form-control mb-2"
                defaultValue="Tarea #01"
                />
            <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del To Do"
                defaultValue="descripcion tarea #01"
            />
            <select
                className="form-control mb-2"
                name="todoEstado"
                defaultValue="pendiente"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button className="btn btn-primary">Agregar</button>
        </form>
        
    </>
  );
};

export default FormNoControlado;