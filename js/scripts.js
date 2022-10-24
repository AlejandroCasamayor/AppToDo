const inputTarea = document.getElementById('inputTarea')
const btnGuardar = document.getElementById('btnGuardar')
const SectionTareas = document.getElementById('SectionTareas')
const selectPrioridad = document.getElementById('selectPrioridad')
const prioridadTarea = document.getElementById('prioridadTarea')

function addTarea (arrTareas,pTitulo){
    let cont = arrTareas.length;
    let tareaCreada= 
        {
        'idTarea': cont,
        'titulo': pTitulo,
        'prioridad': selectPrioridad.value
    }
    arrTareas.push(tareaCreada)
}

function pintarTareas () {
    SectionTareas.innerHTML= "";
    const tareas = JSON.parse(localStorage.getItem('tarea'))
    for (let tarea of tareas) {
        const articleTarea = document.createElement('article')
        const ptitulo = document.createElement('p')
        const deleteButton = document.createElement('button')
        deleteButton.innerText= 'ELIMINAR'
        deleteButton.className= 'btnBorrar'
        deleteButton.addEventListener('click',(event)=>{
            event.target.parentNode.remove();
            tareas.splice(tarea.idTarea,1)
            console.log(tareas) /* consigo eliminarlo del array pero no se quita de localstorage, por lo que al volver a pintar se pinta lo almacenado en el localstorage
            supongo que lo he hecho mal desde el principio */
        })
        ptitulo.innerText = tarea.titulo

        articleTarea.append(ptitulo,deleteButton)
        articleTarea.dataset.prioridad= tarea.prioridad;

        if (articleTarea.dataset.prioridad == 'Urgente') {
            articleTarea.style.backgroundColor = '#FAA0A0'
        }
        if (articleTarea.dataset.prioridad == 'Diaria') {
            articleTarea.style.backgroundColor = 'lightblue'
        }
        if (articleTarea.dataset.prioridad == 'Mensual') {
            articleTarea.style.backgroundColor = 'lightgreen'
        }
        SectionTareas.append(articleTarea)
    }    
}
btnGuardar.addEventListener('click',() => {
    addTarea(listaTareas,inputTarea.value)
    const strTexto = JSON.stringify(listaTareas)
    localStorage.setItem('tarea',strTexto)
    pintarTareas()
})

function filtrarPrioridad() {
    if (prioridadTarea.value =='Urgente'){
        pintarTareas()
    }
}
prioridadTarea.addEventListener('change',() =>{
    filtrarPrioridad()
}
)



/* deleteButton.addEventListener('click',()=>{
    tareas.splice(tarea.idTarea,1) 
    console.log(tarea.idTarea)// Devuelve la posision del array
    console.log(typeof tarea.idTarea) // es numero
    pintarTareas()
    event.target.parentNode.remove(); // Elimina el article pero no el array
}) */

/* 
        function filtrarPrioridad() {
            if (prioridadTarea.value =='Urgente'){
                console.log('hola')
            }
        }
        prioridadTarea.addEventListener('change',() =>{
            filtrarPrioridad()
        }
        ) */