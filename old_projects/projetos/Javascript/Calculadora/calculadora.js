console.log("LOADED")

function calcular(tipo,valor) {
    if ( tipo === 'valor') {
      document.getElementById('resultado').value += valor
    } else if (tipo === 'acao'){
      if ( valor === 'c'){
        document.getElementById('resultado').value = ''
      }
      if ( valor === '*' || valor === '+' || valor ==='-' || valor ==='/' || valor ==='.'){
        document.getElementById('resultado').value += valor
      }
      if (valor === '='){
        document.getElementById('resultado').value = eval(document.getElementById('resultado').value)
      }
    }
}

window.calcular = calcular;