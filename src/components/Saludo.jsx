const cardSaludo = {
  width:"20%",
  border:"1px solid #c9c9c9",
  padding:".5rem",
  marginBottom:"1rem", 
  textAlign:"center",
  margin:"1rem auto"
}  

export const Saludo = () => {
  
  return (
<div style={{...cardSaludo}} >
<h3>Componente saludo</h3>
<p>Bienvenido usuario</p>
</div>
)
}
