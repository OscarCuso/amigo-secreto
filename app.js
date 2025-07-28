let amigos = [];

function agregarAmigo(){
    let nombreAmigos = document.getElementById("amigo").value;
    
    if (nombreAmigos != ''){
        // Verifica si se visualiza
        amigos.push(nombreAmigos)
        recorreAmigos()
        document.getElementById("amigo").value = '';
        
    }else{
        alert('Por favor, Ingrese un nombre')
    }
}

function recorreAmigos (){
    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li")
        lista.textContent = amigos[i]
        listaAmigos.appendChild(lista)
    }
}

function sortearAmigo (){
    if (amigos != []){
        listaAmigos.innerHTML = ""
        let indice = parseInt(Math.floor(Math.random() * amigos.length))
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `El Amigo secreto sorteado es: ${amigos[indice]}`
    }
}