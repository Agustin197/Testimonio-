 import React from "react"
import "../hoja-de-estilo/Testimonio.css"

function Testimonio(){
return (
<div className= "contenedor-testimonio">
  <img 
    className="imagen-testimonio"
    src={require("../images/testimonio-emma.png")}
    alt= "foto emma"/>
  <div className="contenedor-texto-testimonio"> 
    <p className="nombre-testimonio">Emma bostian</p>
    <p className="cargo-testimonio">Ingeniera de Software</p>
    <p className="testimonio">Este es el testimonio de Emma</p>
  </div>
</div>
);
}

export default Testimonio;