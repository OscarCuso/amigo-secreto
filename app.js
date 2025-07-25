let amigos = [];

function agregarAmigo(){
    let nombreAmigos = document.getElementById("amigo").value;
    
    if (!(nombreAmigos == '')){
        // Verifica si se visualiza
        amigos.push(nombreAmigos)
        console.log(amigos)
        document.getElementById("amigo").value = '';
    }else{
        alert('Por favor, Ingrese un nombre')
    }
}
