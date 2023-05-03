document.querySelector("#salvar").addEventListener("click",cadastrar)

function cadastrar(){
    let titulo = document.querySelector("#titulo").value
    let repeticoes = document.querySelector("#repeticoes").value
    let series = document.querySelector("#series").value
    let descanso = document.querySelector("#descanso").value

    const treino = {
        titulo,
        repeticoes,
        series,
        descanso,
    }

    document.querySelector("#treinos").innerHTML += gerarCard(treino)
}

function gerarCard(treino){
    return `  <div class="container">
    <div class="row">
        <div class="card">
            <div class="card-header">
              ${treino.titulo}
            </div>
            <div class="card-body">
             
              <p class="card-text">${treino.repeticoes}</p>
              <p><span class="badge text-bg-danger">${treino.repeticoes}</span></p>
              <a href="#" class="btn btn-primary"><i class="bi bi-check-lg"></i>${treino.descanso}</a>
              <a href="#" class="btn btn-danger"><i class="bi bi-trash"></i>Trocar treino</a>
              
            </div>
          </div>

    </div>
    
</div>`

}