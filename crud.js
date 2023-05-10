document.querySelector("#salvar").addEventListener("click", cadastrar)

let lista_tarefas =[]

window.addEventListener("load",() => {
  lista_tarefas = JSON.parse( localStorage.getItem("lista_tarefas"))
  lista_tarefas.forEach(()=> {
    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

  })
  
})

function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        descricao,
        pontos,
        categoria,
    }
if (tarefa.titulo.length ==0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
}
  lista_tarefas.push(tarefa)
    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    
    localStorage.setItem("lista_tarefas", JSON.stringify(lista_tarefas))

    modal.hide()

}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function gerarCard(tarefa){
    return `<div class="col-12 ">
                <div class="card">
                    <div class="card-header">
                        ${tarefa.titulo}
                    </div>
                    <div class="card-body">
                        <p class="card-text">${tarefa.descricao}</p>
                        <p>
                        <p>${tarefa.pontos } Reps</p>
                        <p>${tarefa.categoria } Min De Descanço</p>
                        </p>
                        
                        <a href="#" class="btn btn-success">
                            <i class="bi bi-check-lg"></i>
                        </a>
                        <button type="button" onClick='apagar(this)' class="btn btn-danger">Editar Treino</button>
                    </div>
                </div> <!-- card -->
            </div> <!-- col -->` 
}