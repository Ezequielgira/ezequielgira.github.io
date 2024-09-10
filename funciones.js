document.getElementById('ver').onclick = function () {
    console.log("Va a mostrar info");
    document.getElementById("info").innerHTML = "Lomas de Zamora (CP1832) <br> Fecha de Nacimiento: 05/11/1988 <br> Email: ezequielgira@gmail.com"}

    document.getElementById('ocultar').onclick = function () {
        console.log("Va a ocultar info");
        document.getElementById("info").innerHTML = " "}


const container=document.getElementById('container')

container.addEventListener('click', (e) =>{
if (e.target.classList.contains('tareas')){
    console.log("Muestra y oculta funciones")
    e.target.parentElement.classList.toggle('scale')
    e.target.children[1].classList.toggle('rotate')
    }
})

const cursos=document.getElementById('cursos')

cursos.addEventListener('click', (d) =>{
if (d.target.classList.contains('tareas2')){
    console.log("Muestra y oculta cursadas")
    d.target.parentElement.classList.toggle('scale')
    d.target.children[1].classList.toggle('rotate')
    }
})

var boton = document.querySelector('.arriba');

boton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

