
export const SaludoProps = ({nombre,apellido,edad}) => {
  return (
    <div  style={{width:"20%",border:"1px solid #c9c9c9",padding:"1rem",marginBottom:"1rem", textAlign:"left"}} >
        <h3>Componente usando props</h3>
        <p>Datos de usuario</p>
        <p>Nombre:{nombre}</p>
        <p>Apellido:{apellido}</p>
        <p>Edad:{edad}</p>
    </div>
  )
}
