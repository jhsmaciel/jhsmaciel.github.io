var i = 0
var j = 1
function makeCard(title, tecnologias,texto) {
    let row = document.createElement('div')
        row.className = 'row'
    let col = document.createElement('div')
        col.className = 'col-lg-6'
        row.id = i;
        row.appendChild(col)
    let card = document.createElement('div')
        card.className = 'card my-3'
        col.appendChild(card)
    let cardbody = document.createElement('div')
        cardbody.className = 'card-body'
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
        cardbody.appendChild(h4)
        cardbody.appendChild(h6)
        cardbody.appendChild(p)

    if ( i % 2 === 0 || i === 0){
        document.getElementById('div').appendChild(row);
        j = i
    } else {
        document.getElementById(j).appendChild(col)
    }
    i++
}