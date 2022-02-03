
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//var principal = document.querySelector("#")


var ingreso = document.querySelector("#input-texto");
var textoEncriptado = document.querySelector("#msg");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");
var btnLimpiar = document.querySelector("#btn-limpiar");
console.log(btnEncriptar);
console.log(textoEncriptado);




btnEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    textoEncriptado.value = "";
    var mensaje = ingreso.value;
    textoEncriptado.value = encriptar(mensaje);
});

btnDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    textoEncriptado.value = "";
    var mensaje = ingreso.value;
    textoEncriptado.value = desencriptar(mensaje);
});

btnCopiar.addEventListener("click",function(event){
    event.preventDefault();

    ingreso.value = "";
    var copia = textoEncriptado.value;
    ingreso.value = copia;
    textoEncriptado.value = "";
});

btnLimpiar.addEventListener("click",function(event){
    event.preventDefault();

    ingreso.value = "";
    textoEncriptado.value = "";
});






function encriptar(mensaje)
{
    var textOriginal = mensaje;
    var arrayMsj = textOriginal.split('');
    var encriptado = [];
    for(var j=0; j<arrayMsj.length; j++)
    {
        switch(arrayMsj[j])
        {
            case "e":
                {
                    encriptado.push(arrayMsj[j]);
                    encriptado[j]="enter";
                    break;
                }
            case "i":
                {
                    encriptado.push(arrayMsj[j]);
                    encriptado[j]="imes";
                    break;
                }
            case "a":
                {
                    encriptado.push(arrayMsj[j]);
                    encriptado[j]="ai";
                    break;
                }
            case "o":
                {
                    encriptado.push(arrayMsj[j]);
                    encriptado[j]="ober";
                    break;
                }
            case "u":
                {
                    encriptado.push(arrayMsj[j]);
                    encriptado[j]="ufat";
                    break;
                }  
            default:
                {
                    encriptado.push(arrayMsj[j]);
                }  
        }
    }

    var mensajeEncriptado = "";

    for(var i=0; i<encriptado.length; i++)
    {
        mensajeEncriptado = mensajeEncriptado+encriptado[i];
    }
    return mensajeEncriptado;
}


var mensajeDesencriptado = "";
function desencriptar(mensajeEncriptado)
{
    var textoEncriptado = mensajeEncriptado;
    var arrayMsj = textoEncriptado.split('');
    var desencriptado = [];
    for(var j=0; j<arrayMsj.length; j++)
    {
        switch(arrayMsj[j])
        {
            case "e":
                {
                    desencriptado.push(arrayMsj[j]);
                    arrayMsj.splice(j+1,4)
                    break;
                }
            case "i":
                {
                    desencriptado.push(arrayMsj[j]);
                    arrayMsj.splice(j+1,3)
                    break;
                }
            case "a":
                {
                    desencriptado.push(arrayMsj[j]);
                    arrayMsj.splice(j+1,1)
                    break;
                }
            case "o":
                {
                    desencriptado.push(arrayMsj[j]);
                    arrayMsj.splice(j+1,3)
                    break;
                }
            case "u":
                {
                    desencriptado.push(arrayMsj[j]);
                    arrayMsj.splice(j+1,3)
                    break;
                }  
            default:
                {
                    desencriptado.push(arrayMsj[j]);
                }  
        }
    }

    for(var i=0; i<desencriptado.length; i++)
    {
        mensajeDesencriptado = mensajeDesencriptado+desencriptado[i];
    }
    return mensajeDesencriptado;
}


