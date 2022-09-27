//funcion normal que regresa una promesa
//pero el resultado se obtiene mas lento.
function fcnSumarLento( numero ){
    /* var promesa = new Promise(function(resolve, reject){
    });
    return promesa; */
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

//esta es la manera mas optimizada de definir
//una funcion pero de tipo arrow (flecha) que
//tambien regresa una promesa pero el resultado
//se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

//FIC: llamado normal de la funcion sumar lento y su promesa.
fcnSumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta:', respuesta);
});
//FIC: llamado normal de la funcion sumar rapido y su promesa.
fcnSumarRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
});