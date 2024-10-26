import '../assets/css/saludoprops.css'

export const SaludoProps = ({nombre,apellido,edad}) => {
  
  return (
    
    <div  className="styles">
        <h3>Componente usando props</h3>
        <p>Datos de usuario</p>
        <p>Nombre:{nombre}</p>
        <p>Apellido:{apellido}</p>
        <p>Edad:{edad}</p>
    </div>

  )
}
