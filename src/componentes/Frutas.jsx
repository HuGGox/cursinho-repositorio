const Frutas = (props) => {
    console.log(props)
    return (
    <>
        <ul>            
            
        {props.frutasApp.map((fruta, index)=> (
            <li key={index}>
                {index + 1} - {fruta}
            </li>
        ))}  
        </ul>
    </>
  )
}

export default Frutas;