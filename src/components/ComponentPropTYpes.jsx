import PropTypes from "prop-types"

export const ComponentPropTYpes = ({titulo, nombre,nick}) => {
  return (
    <div style={{border:"1px solid #c9c9c9", padding:"0 2rem 2rem", width:"50%",margin:"0 auto"}}>

        <h4>{titulo}</h4>
        
        <p>
            Proptypes permite definir el tipo de dato a los props del componente, esto permite a 
            otros desarrolladores usar correctamente el componente  
        </p>
        <form action="">
            <fieldset style={{width:"200px",textAlign:'left', padding:"1rem",marginBottom:"1rem"}}>
                <legend>User</legend>
                <p>Nombre:{nombre}</p>
                <p>Nick:{nick}</p>
            </fieldset>
        </form>
        <p>
            EL valor por Nombre es requerido y de tipo string. Muestra error si se coloca algo diferente.
        </p>
        <p>
            El valor de Nick es por default user, es de tipo string.  
        </p>



    </div>
  )
}

ComponentPropTYpes.propTypes = {
    titulo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    nick:PropTypes.string
}
ComponentPropTYpes.defaultProps = {
    nick:"user"   
  }


