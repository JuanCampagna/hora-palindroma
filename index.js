const esHoraPalindroma = () => {
  hora = document.getElementById("inputHora").value;
  hora = hora.replace(':','')

  document.getElementById("respuesta").innerHTML = ""
  document.getElementById("palindromoCuatroDigitos").innerHTML = ""
  document.getElementById("palindromoTresDigitos").innerHTML = ""
  const body = document.querySelector('body');
  body.classList.remove('confetti');
  // const horaPerfecta = document.getElementById("hora-perfecta");
  // horaPerfecta.classList.remove("hora-perfecta")

  if (isNaN(hora) || hora=="") { 
    document.getElementById("respuesta").innerHTML = "El valor ingresado no es numérico"
    return
  }

  const palindromo24horas = esPalindromo24Horas(hora)
  const palindromo12Horas = esPalindromo12Horas(hora)
  if (palindromo24horas || palindromo12Horas) {
    if (palindromo24horas && palindromo12Horas) {
      body.classList.add('confetti');
      // horaPerfecta.classList.add('hora-perfecta');
    }
    document.getElementById("respuesta").innerHTML = "Es palíndromo"
  } else {
    document.getElementById("respuesta").innerHTML = "No es palíndromo"
  }
}

const esHoraPalindromaCuatroDigitos = (hora) => {
  let respuesta = ''
  let estado = false

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
  let respuesta = ''
  let estado = false

  if (hora[0] == hora[2]) {
    respuesta = `Es palíndromo de tres dígitos: ${hora}`
    estado = true
  }

  document.getElementById("palindromoTresDigitos").innerHTML = respuesta
  return estado
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
  return esHoraPalindromaCuatroDigitos(hora)
}

const esPalindromo12Horas = (hora) => {
  hora = conversionADoceHoras(hora)
  if (hora.length == 4) {
    return esHoraPalindromaCuatroDigitos(hora)
  } else {
    return esHoraPalindromaTresDigitos(hora)
  }
}