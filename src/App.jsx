// import Contador from "./componentes/Contador";
// import Frutas from "./componentes/Frutas";

import Formulario from "./componentes/Formulario";

// import FormNoControlado from "./componentes/FormNoControlado";

// const App = () => {

//     const saludo = "saludo desde constante";
    
//     const clasesObjetos = {
//         primary: "text-primary",
//         danger: "text-danger",
//     }

//     const user = false;

//     const SaludoBienvenida = () => (
//         <h2 className="text-success">Bienvenido!</h2>
//     );

//     const SaludoDespedida = () => (
//         <h2 className="text-danger">Adios!</h2>
//     );



//     const funcionClick = (nombre) => {
//         console.log(`click ${nombre}`);
//     }

//     const frutas = ["🍏", "🍉","🍐"];


//   return (
//     <div className="container">

//         <Contador />

//         <p className={clasesObjetos.primary}>{saludo}</p>

//         {
//             user ? <SaludoBienvenida /> : <SaludoDespedida />
//         }

//         <Frutas frutasApp={frutas} />


//         <button
//             className="btn btn-primary"
//             onClick={()=> funcionClick("pedrox")}
//         >
//             dame click
//         </button>

//     </div>
//   )
// }
// ------------------------------------------------


const App = () => {
    return (
        <div className="container">
            <h1>Formularios</h1>
            {/* <FormNoControlado /> */}
            <Formulario />

        </div>
    );
};






export default App;
