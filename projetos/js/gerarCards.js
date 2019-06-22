var i = 0
var j = 1
var k = 50

function makeCard(title, tecnologias,texto, caminho) {
    let row = document.createElement('div')
        row.className = 'row'
    let col = document.createElement('div')
        col.className = 'col-lg-4'
        row.id = i;
        row.appendChild(col)
    let card = document.createElement('div')
        card.className = 'card'
        col.appendChild(card)
    let cardbody = document.createElement('div')
        cardbody.className = 'card-body'
        cardbody.id = k
        cardbody.onmouseover = shadowOn
        cardbody.onmouseout = shadowOff
        card.appendChild(cardbody)
    let h4 = document.createElement('h4')
        h4.className = 'card-title'
        h4.innerHTML = title
    let h6 = document.createElement('h6')
        h6.className= 'card-subtitle mb-3 mt-2 text-info'
        h6.innerHTML = tecnologias
    let p = document.createElement('p')
        p.className = 'card-text'
        p.innerHTML = texto
    let a = document.createElement('a')
        a.className = 'btn btn-outline-'+corAleatoria()
        a.href = caminho
        a.innerHTML = 'Ver Projeto!'
        cardbody.appendChild(h4)
        cardbody.appendChild(h6)
        cardbody.appendChild(p)
        cardbody.appendChild(a)

    if ( i % 3 === 0 || i === 0){
        document.getElementById('sec').appendChild(row);
        j = i
    } else {
        document.getElementById(j).appendChild(col)
    }
    i++
    k++
}

function corAleatoria(){
    var color = Math.floor(Math.random() * 6)

    switch (color) {
        case 0:
            return 'info'
        case 1:
            return 'warning'
        case 2:
            return 'danger'
        case 3:
            return 'success'
        case 4:
            return 'primary'
        case 5:
            return 'secondary'
    }
}

let shadowOn = function () {
    let elemento = document.getElementById(this.id)
    elemento.className = "shadow-strong "+ elemento.className
    console.log()
}

let shadowOff = function () {
    let elemento = document.getElementById(this.id)
    elemento.className = "card-body"
    console.log()
}