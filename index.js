const esHoraPalindroma = (hora) => {
  console.log(diccionario)
  let horaString = hora.toString()
  horaString = horaString.replace(':','')

  document.getElementById("respuesta").innerHTML = ""
  document.getElementById("palindromoCuatroDigitos").innerHTML = ""
  document.getElementById("palindromoTresDigitos").innerHTML = ""

  if (esPalindromo24Horas(horaString) || esPalindromo12Horas(horaString)) {
    document.getElementById("respuesta").innerHTML = "Es palíndromo"
  } else {
    document.getElementById("respuesta").innerHTML = "No es palíndromo"
  }
}

const imprime = () => {
  const hora = document.getElementById("inputHora").value
  // console.log(esHoraPalindroma(hora))
  esHoraPalindroma(hora)
  // document.getElementById("respuesta").innerHTML = esHoraPalindroma(hora).message
}

const esHoraPalindromaCuatroDigitos = (hora) => {
  const respuesta = ''
  const estado = false

  if (hora[0] == hora[3] && hora[1] == hora[2]){
    respuesta = `Es palíndromo de cuatro dígitos: ${hora}`
    estado = true
  }
  else if (hora[0] == hora[2] && hora[1] == hora[3]) {
    respuesta = `No es palíndromo de cuatro dígitos, pero cuenta igual: ${hora}`
    estado = true
  }

  document.getElementById("palindromoCuatroDigitos").innerHTML = respuesta
  return estado
}

const esHoraPalindromaTresDigitos = (hora) => {
  const respuesta = ''
  const estado = false
}

const conversionADoceHoras = (hora) => {
  const horas = parseInt(hora.substring(0,2))
  if (horas >= 12) {
    return (horas-12).toString()+hora.substring(2,4)
  } else {
    return horas.toString()+hora.substring(2,4)
  }
  //si las horas es menor a 10, termina devolviendo 3 dígitos
}

const esPalindromo24Horas = (hora) => {

}

const esPalindromo12Horas = (hora) => {

}