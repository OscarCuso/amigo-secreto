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