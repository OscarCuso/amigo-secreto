let amigos = [];

// Agrega los amigos al arreglo
function agregarAmigo(){
    let nombreAmigos = document.getElementById("amigo").value;
    
    if (nombreAmigos != ''){
        amigos.push(nombreAmigos)
        recorreAmigos()
        document.getElementById("amigo").value = '';
        
    }else{
        alert('Por favor, Inserte un nombre')
    }
}

// Se crea la lista de amigos y los muestra
function recorreAmigos (){
    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li")
        lista.textContent = amigos[i]
        listaAmigos.appendChild(lista)
    }
}

// Se realiza el sorteo y muetra el amigo sorteado
function sortearAmigo (){
    if (amigos.length > 0){
        listaAmigos.innerHTML = ""
        let indice = parseInt(Math.floor(Math.random() * amigos.length))
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = `El Amigo secreto sorteado es: ${amigos[indice]}`
    }else{
        alert ("Por favor antes de sortear ingresa los nombres")
    }
}