const inputTarea = document.getElementById('inputTarea')
const btnGuardar = document.getElementById('btnGuardar')
const SectionTareas = document.getElementById('SectionTareas')


function addTarea (arrTareas,pTitulo,pPrioridad){
    const cont = arrTareas.length;
    let tareaCreada= 
        {
        'idTarea': cont,
        'titulo': pTitulo,
        'prioridad': pPrioridad
    }
    arrTareas.push(tareaCreada)
}

function pintarTareas () {
    const tareas = JSON.parse(localStorage.getItem('tarea'))
    console.log(tareas)
    for (let tarea of tareas) {
        const articleTarea = document.createElement('article')
        const ptitulo = document.createElement('p')
        const deleteButton = document.createElement('button')
        deleteButton.innerText= 'ELIMINAR'
        ptitulo.innerText = tarea.titulo
        
        articleTarea.append(ptitulo,deleteButton)
        SectionTareas.append(articleTarea)
    }
}

btnGuardar.addEventListener('click',() => {
    addTarea(listaTareas,inputTarea.value,'urgente')
    const strTexto = JSON.stringify(listaTareas)
    localStorage.setItem('tarea',strTexto)
    pintarTareas()
})