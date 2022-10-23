var listaTareas = new Array();
listaTareas = [
    {'idTarea':0, 'titulo':'Estudiar Javascript', 'prioridad':'urgente'},
    {'idTarea':1, 'titulo':'Dormir', 'prioridad':'diaria'},
    {'idTarea':2, 'titulo':'Salir a comer', 'prioridad':'mensual'}
]
const inputTarea = document.getElementById('inputTarea')
const btnGuardar = document.getElementById('btnGuardar')
btnGuardar.addEventListener('click',() => {
    const texto = inputTarea.value
    const strTexto = JSON.stringify
    localStorage.setItem('tarea',texto)
    
})


function addTarea (arrTareas,pTitulo,pPrioridad){
    const cont = arrTareas.length +1;
    let tareaCreada= 
        {
        'idTarea': cont,
        'titulo': pTitulo,
        'prioridad': pPrioridad
    }
    arrTareas.push(tareaCreada)
} 
/* addTarea(listaTareas,'COMER','urgente')
addTarea(listaTareas,'disfrutar','media') */


function pintarTareas (arrTareas) {
    /* section = ''; */
    for (let tarea of arrTareas) {
        const section = document.getElementById('SectionTareas')
        const articleTarea = document.createElement('article')
        const ptitulo = document.createElement('p')
        const deleteButton = document.createElement('button')
        deleteButton.innerText= 'ELIMINAR'
        ptitulo.innerText = tarea.titulo
        articleTarea.append(ptitulo,deleteButton)
        section.append(articleTarea)
    }
}
pintarTareas(listaTareas) 