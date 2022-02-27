import { useState } from "react";
const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false,
    });

    const [error, setError] = useState(false);

// las validaciones se hacen en el handleSubmit.
    const handleSubmit = (e) => {
        e.preventDefault();

        const { todoName, todoDescripcion} = todo;
        if (!todoDescripcion.trim() || !todoName.trim()){
            setError(true);
            return;
        }
        setError(false);
        console.log(todo);
        };

    const handleChange = e => {
        console.log(e.target.value)
        console.log(e.target.name)

        const {name, type, value, checked} = e.target;
        
        //esto tambien se puede hacer de la siguiente manera con una funcion flecha
        //lo que hacemos con esta forma es trayendo una copia del todo
        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value,
        // });
        // y con esta forma lo que hacemos es traer la ultima version de los valores
        setTodo((old) =>({
            ...old,
        // esto tambien se puede abreviar haciendo una constante de e.target!
            // [e.target.name]:
            //     e.target.type === 'checkbox'
            //         ? e.target.checked
            //         : e.target.value,
            [name]:
                type === 'checkbox'
                    ? checked
                    : value,
        }));

    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos Obligatorios</div>
    )


  return (
    <>
        <h2>Controla2</h2>
        {error && <PintarError />}
        <form onSubmit={handleSubmit}>
            <input
                name="todoName"
                placeholder="Ingrese To Do"
                type="text"
                className="form-control mb-2"
                //de esta manera lo que sucede es que nos va a pisar el hook de cada componente y lo que nosotros necesitamos es hacer una copia del componente para que luego los cambios los agreguemos al renderizar (o algo asi XD)
                // onChange={e => setTodo({todoName: e.target.value})}
                // esto se puede abreviar con un handleChange pasado en una funcion!
                // onChange={e => setTodo({...todo, todoName: e.target.value})}
                onChange={handleChange}
                value={todo.todoName}

                />
            <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del To Do"
                // onChange={e => setTodo({...todo, todoDescripcion: e.target.value})}
                onChange={handleChange}
                value={todo.todoDescripcion}
                

            />
            <select
                className="form-control mb-2"
                name="todoEstado"
                // onChange={e => setTodo({...todo, todoEstado: e.target.value})}
                onChange={handleChange}
                value={todo.todoEstado}

            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={todo.todoCheck}
                    name="todoCheck"
                    id="flexCheckDefault"
                    onChange={handleChange}
                />
                <label
                    class="form-check-label"
                    htmlFor="flexCheckDefault"
                >
                    Dar prioridad
                </label>
            </div>

            <button className="btn btn-primary" type="submit">Agregar</button>
            {/* en caso de no poner submit al boton, react nos pone por defecto un submit en "onSubmit" y se lo agrega al primer boton que encuentre lo cual no es lo que queremos si es que tenemos varios botones y Agregar no es el primero. */}
        </form>
        
    </>
  )
}

export default Formulario