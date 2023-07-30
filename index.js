const esHoraPalindroma = (hora) => {
  let horaString = hora.toString()
  horaString = horaString.replace(':','')
  const cantidadDigitos = horaString.length

  console.log(horaString)
  if (cantidadDigitos < 3)
    return { status: "error", message: "La cantidad de dígitos no es suficiente" }
  else if (cantidadDigitos > 4)
    return { status: "error", message: "La cantidad de dígitos es excesiva" }
  else
    switch (cantidadDigitos) {
      case 3:
        if (horaString[0] == horaString[2]) {
          return { status: "ok", message: "Es palíndromo"}
        } else {
          return { status: "error", message: "No es palíndromo"}
        }
      
      case 4:
        if (horaString[0] == '0' && horaString[3] != '0')
          return esHoraPalindroma(horaString.slice(1))
        if (horaString[0] == horaString[3] && horaString[1] == horaString[2])
          return { status: "ok", message: "Es palíndromo"}
        else if (horaString[0] == horaString[2] && horaString[1] == horaString[3])
          return { status: "ok", message: "No es palíndromo pero cuenta igual"}
        else
          return { status: "error", message: "No es palíndromo"}
    
      default:
        return { status: "error", message: "Ocurrió un error inesperado"}
    }
}

const imprime = () => {
  const hora = document.getElementById("inputHora").value
  document.getElementById("respuesta").innerHTML = esHoraPalindroma(hora).message
}