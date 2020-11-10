var mensaje = [];
var clave = [];
var resultado = [];
var abcx = "";
var abcy = "";
var matriz = [];
var textoCifrado = "";
var textoDescifrado = "";
var TextoClaro = "";
var TextoClave = "";

//mensaje = document.getElementById("mensaje").value;
//clave = document.getElementById("clave").value;

function OperacionesVigi() {
    mensaje = document.getElementById("mensaje").value;
    clave = document.getElementById("clave").value;
    claveTemp = [];
    mensaje = Array.from(mensaje).join(',');
    console.log("El mensaje cortado: " + mensaje);
    claveTemp = Array.from(clave).join(',');
    console.log("La clave cortado: " + claveTemp);
    clave = [mensaje.length];
    let cont = 0;


    for(let i = 0; i<mensaje.length; i++){
        clave[i] = claveTemp[cont];
        cont++;
        if(cont == claveTemp.length)
            cont = 0;
    }
    
    matriz = generarMatrizABC();
    Cifrar();
}

function generarMatrizABC(){
    let contador = 0;
    let abcTemp = [];
    abcTemp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let abc = [abcTemp.length*2];

    for (let index = 0; index < 26; index++) {
        
        abc[index] = abcTemp[index];
        abc[index+26] = abcTemp[index];

    }
    //console.log("Xde: " + matriz[x][y]);

    for(let i = 0; i<26; i++){
        contador = 0;
        for(let j = 0; j<26; j++){
            matriz[i][j] = abc[contador+i];
            contador++;
        }
    }
    //console.log("XDDD: " + matriz[x][y]);

    return matriz;
}

function Cifrar() {
    mensaje = document.getElementById("mensaje").value;
    clave = document.getElementById("clave").value;
    let cifrado = [];
    cifrado = [mensaje.length];
    let i = 0;
    let j = 0;

    for (let index = 0; index < mensaje.length; index++) {
        i = mensaje.charCodeAt(index)-97;
        i = clave.charCodeAt(index)-97;
        cifrado[index] = matriz[i][j];
    }

    resultado = cifrado;

    for (let index = 0; index < 26; index++) {
        console.log(matriz[k]);
        console.log(mensaje);
        console.log(clave);
        console.log(cifrado);
    }
}

function getMensajeCifrado() {
    var result = "";
    for (let index = 0; index < resultado.length; index++) {
        result += resultado;
    }
    return result;
}
function TextoCifrado(TextoClaro, TextoClave) {
    let tablaCesar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let indiceX = 0;
    let indiceY = 0;
    
    for (let index = 0; index < tablaCesar.length; index++) {
        if (TextoClaro == tablaCesar[index]) {
            indiceX = index;
            break;
        }
    }
    for (let index = 0; index < tablaCesar.length; index++) {
        if (TextoClave == tablaCesar[index]) {
            indiceY = index;
            break;
        }   
    }

    return tablaCesar[(indiceX+indiceY)%27];
}

function TextoDescifrado(TextoCifrado, TextoClave) {
    let tablaCesar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let indiceTextoCifrado = 0;
    let indiceTextoClave = 0;
    
    for (let index = 0; index < tablaCesar.length; index++) {
        if (TextoCifrado == tablaCesar[index]) {
            indiceTextoCifrado = index;
            break;
        }
    }
    for (let index = 0; index < tablaCesar.length; index++) {
        if (TextoClave == tablaCesar[index]) {
            indiceTextoClave = index;
            break;
        }   
    }
    if (indiceTextoCifrado >= indiceTextoClave) {
        return tablaCesar[(indiceTextoCifrado-indiceTextoClave)%27];
    }else{
        return tablaCesar[27-(indiceTextoClave-indiceTextoCifrado)];
    }
}

function encryptTextoClaro(textoClaro, clave) {
    let claveCompeltada = "";
    textoClaro = "";

    let indice = 0;

    for (let i = indice; i < textoClaro.length; i++) {
       for (let j = 0; j < clave.length; j++) {
           if (textoClaro.charAt(indice) != ' ') {
               claveCompeltada += clave.charAt(j) + "";
           }else{
               claveCompeltada += " ";
               j--;
           }
            indice++;
       }
    }

    for (let i = 0; i < textoClaro.length; i++) {
        TextoClaro = textoClaro.charAt(i);
        claveCompeltada = claveCompeltada.charAt(i);
        if (TextoClaro != ' ') {
            textoCifrado += cifradovigi.TextoDescifrado();
        }else{
            textoCifrado += " ";
        }
    }

    return textoCifrado;
}

function desencryptTextoClaro(textoClaro, clave) {
    let claveCompeltada = "";
    textoClaro = "";

    let indice = 0;

    for (let i = indice; i < textoClaro.length; i++) {
       for (let j = 0; j < clave.length; j++) {
           if (textoClaro.charAt(indice) != ' ') {
               claveCompeltada += clave.charAt(j) + "";
           }else{
               claveCompeltada += " ";
               j--;
           }
            indice++;
       }
    }

    for (let i = 0; i < textoClaro.length; i++) {
        TextoClaro = textoClaro.charAt(i);
        claveCompeltada = claveCompeltada.charAt(i);
        if (TextoClaro != ' ') {
            textoCifrado += cifradovigi.TextoDescifrado();
        }else{
            textoCifrado += " ";
        }
    }

    return textoClaro;
}

function Charizador (coso){

   var arr = [];

   for(let index = 0; index < coso.length; index++){

        var con = coso.charCodeAt(index);

        if(con <= 122 && con >= 97)
            con = con - 32;

        if(con == 209 || con == 241)
            arr.push(15);

        if(con == 32){

            arr.push(32);

        }else{
            if(con-64 < 15){

                arr.push(con-64);

            }else if(con-64 >= 15 && con-64 < 28){

                arr.push(con-64);

            }
        }
   }
   return arr;
  }


  
  function Cifrar(bandera){

   var mensaje = document.getElementById('mensaje').value;
   var clave = document.getElementById('clave').value;
   var salto = [];

   if(mensaje == ""){
    alert('El mensaje no puede estar vacío')
    return false;
   }
   if(clave == ""){
    alert('La clave no puede estar vacía')
    return false;
   }

   var mensaje2 = Charizador (mensaje);
   var clave2 = Charizador (clave);
   
   var cont = 0;
   if (bandera == true){
    for(let i = 0; i < mensaje2.length; i++){
        if(mensaje2[i] == 32){

            salto.push(32);
            cont += 1;

        }else{

            salto.push((clave2[(i - cont) % clave2.length] + mensaje[i]) % 27);

        }
    }
   }else{
    for(let i = 0; i < mensaje2.length; i++){
        if(mensaje2[i] == 32){

            salto.push(32);
            cont += 1;

        }else{
            
            var val = mensaje2[i] - clave2[(i - cont) % clave2.length];
            
            if (val < 1)
                val += 27;
            
            salto.push(val % 27);
        }
    }
   }
   return salto;
  }

  function Descifrar(coso){

   var regres = "";

   for(let i = 0; i < coso.length; i++){

        if (coso[i] == 15 ){
            regres += String.fromCharCode(209);
        }

        if (coso[i] == 32){
            regres += String.fromCharCode(32);
        }

        if (coso[i] == 0){
            regres += String.fromCharCode(90);
        }

        if(coso[i] < 15 && coso [i] > 0)
            regres += String.fromCharCode(coso[i]+64);

        else if(coso[i] > 15 && coso[i] < 28){
            regres += String.fromCharCode(coso[i]+63);
        }
   }
   document.getElementById('caja').value = regres;
  }