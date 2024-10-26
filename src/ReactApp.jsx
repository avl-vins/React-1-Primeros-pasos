import { ComponentPropTYpes } from "./components/ComponentPropTYpes"
import { Saludo } from "./components/Saludo"
import { SaludoProps } from "./components/SaludoProps"

export const ReactApp = () => {
  return (
<>
  <h1>Primeros pasos en React</h1>
  
  <h3>Creando y usando componentes</h3>
  
  <Saludo/>

  <SaludoProps nombre="Avl" apellido="Vins" edad="33" />

  <h3>Usando proptypes en los componentes</h3>
  <ComponentPropTYpes titulo={"Proptypes"} nombre={"avl"} />

</>
  )
}
