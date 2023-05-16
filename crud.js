document.querySelector("#salvar").addEventListener("click", cadastrar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    atualizar()
})
  
function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    tarefas.forEach((tarefa) =>{
        document.querySelector("#tarefas").innerHTML 
                    += gerarCard(tarefa)
    })
}

function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        id: Date.now(),
        titulo,
        descricao,
        pontos,
        categoria,
    }
if (tarefa.titulo.length ==0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
}
  tarefas.push(tarefa)
    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    
    localStorage.setItem("#tarefas", JSON.stringify(tarefas))

   
    modal.hide()


}

function apagar(botao){
    let card = botao.parentNode.parentNode.parentNode
    let indice = Array.from(card.parentNode.children).indexOf(card)
    tarefas.splice(indice, 1)
    atualizar()

    // Remover do localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
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