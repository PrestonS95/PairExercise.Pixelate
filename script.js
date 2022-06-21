// Your code here
// const ul = document.getElementById('the-ul')
// const newLi = document.createElement('li')
// ul.appendChild(newLi)
let table = document.getElementsByTagName('table')[0]
function makeRow(){
    const row = document.createElement('tr')
    for (let i = 0; i < 18; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}
makeRow();
makeRow();

const button = document.getElementById('add-row');
button.addEventListener('click', makeRow)

table.addEventListener('click', colorize)
function colorize(event){
    const target = event.target
    if(target.className.length){
        target.className = ''
    } else {
        target.className = 'red'
    }
console.log('click')
}



const colors = document.getElementsByTagName('select')
function colorChange(event){
    colors.addEventListener('change', colorChange)
     console.log(event.target.value)
}


