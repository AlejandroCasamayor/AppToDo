const inputTarea = document.getElementById('inputTarea')
const btnGuardar = document.getElementById('btnGuardar')
const SectionTareas = document.getElementById('SectionTareas')
const selectPrioridad = document.getElementById('selectPrioridad')

function addTarea (arrTareas,pTitulo){
    const cont = arrTareas.length;
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
        console.log(cont)
        const articleTarea = document.createElement('article')
        const ptitulo = document.createElement('p')
        const deleteButton = document.createElement('button')

        deleteButton.innerText= 'ELIMINAR'
        deleteButton.dataset.idtarea
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


/* FILTROS?
if (selectPrioridad.value==='Urgente'){
            articleTarea.dataset.urgente
        } else {
            break;
        }
 */