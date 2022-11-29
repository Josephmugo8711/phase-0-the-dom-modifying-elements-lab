const main = document.querySelector('main#main')
main.remove()
let newHeader = document.createElement("h1")
//setAttribute() method is used to set or add an attribute to a particular element and provides a value to it
newHeader.setAttribute("id","victory")
newHeader.innerHTML = `<h1>Joseph is the champion</h1>`