function suma(a,b){
    return a + b;
}
function resta(a,b){
    return a -b ;
}
function multiplicacion(a,b){
    return a*b ;
}
function divicion(a,b){
    if (b==0){
        console.log("no valido");
    }
    else {
        return a/b;
    }


}
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion= multiplicacion;
exports.divicion = divicion;