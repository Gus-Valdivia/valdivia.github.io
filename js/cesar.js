let Cifrar_btn = document.getElementById("Cifrar_btn");
let Descifrar_btn = document.getElementById("Descifrar_btn");
let Txt_Cesar = document.getElementById("txt_cesar")
let Des_Cesar = document.getElementById("desplazamiento_cesar");
let Text_Area_Cesar = document.getElementById("res_cesar");
let Copiar = document.getElementById("Copiar");
let NV = document.getElementById("NV");
let NC = document.getElementById("NC");
let BloqueC = document.getElementById("cont_cesar");
let BloqueV = document.getElementById("cont_vig");
let Body = document.getElementById("body");

function cifrar() {
    var texto = document.getElementById("txt_cesar").value;
    var desplazamiento = parseInt(document.getElementById("desplazamiento_cesar").value);
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char.match(/[a-zA-Z]/)) {
            var code = texto.charCodeAt(i);
            var isUpperCase = char === char.toUpperCase();
            var shift = isUpperCase ? 65 : 97;
            var cipher = (code - shift + desplazamiento) % 26;
            if (cipher < 0) {
                cipher += 26;
            }
            resultChar = String.fromCharCode(cipher + shift);
            resultado += isUpperCase ? resultChar.toUpperCase() : resultChar;
        } else {
            resultado += char;
        }
    }

    document.getElementById("res_cesar").value = resultado;
}

function descifrar() {
    var texto = document.getElementById("txt_cesar").value;
    var desplazamiento = parseInt(document.getElementById("desplazamiento_cesar").value);
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char.match(/[a-zA-Z]/)) {
            var code = texto.charCodeAt(i);
            var isUpperCase = char === char.toUpperCase();
            var shift = isUpperCase ? 65 : 97;
            var cipher = (code - shift - desplazamiento) % 26;
            if (cipher < 0) {
                cipher += 26;
            }
            resultChar = String.fromCharCode(cipher + shift);
            resultado += isUpperCase ? resultChar.toUpperCase() : resultChar;
        } else {
            resultado += char;
        }
    }

    document.getElementById("res_cesar").value = resultado;
}

function colocar() {
    var copiar = document.getElementById("res_cesar").value;
    document.getElementById("txt_cesar").value = copiar;
}

function reiniciar() {
    document.getElementById("txt_cesar").value = "";
    document.getElementById("desplazamiento_cesar").value = "";
    document.getElementById("res_cesar").value = "";
    Text_Area_Cesar.style.display= "none";
    Copiar.style.display = "none";
}

Cifrar_btn.addEventListener("click", () => {
    if(Des_Cesar.value!="" && Text_Area_Cesar.value!=""){
        Text_Area_Cesar.style.display= "flex"
        Copiar.style.display = "flex";
    }
    if(Des_Cesar.value =="" && Text_Area_Cesar.value!=""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE SU FRASE A CIFRAR</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
    if(Des_Cesar.value!="" && Text_Area_Cesar.value ==""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE EL DESPLAZAMIENTO DE SU CIFRADO</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
    if(Des_Cesar.value=="" && Text_Area_Cesar.value ==""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE LOS DATOS SOLICITADOS</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
});

Descifrar_btn.addEventListener("click", () => {
    if(Des_Cesar.value!="" && Text_Area_Cesar.value!=""){
        Text_Area_Cesar.style.display= "flex";
        Copiar.style.display = "flex";
    }
    if(Des_Cesar.value =="" && Text_Area_Cesar.value!=""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE EL DESPLAZAMIENTO DE SU CIFRADO</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
    if(Des_Cesar.value!="" && Text_Area_Cesar.value ==""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE SU FRASE A CIFRAR</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
    if(Des_Cesar.value=="" && Text_Area_Cesar.value ==""){
        Swal.fire({
            icon: 'error',
            title:"<span class='Alert_Tittle'>INGRESE LOS DATOS SOLICITADOS</span>",
            showConfirmButton:false,
            timer:2000,
            timerProgressBar: true,
        });
    }
});

NV.addEventListener("click", ()=>{
    BloqueC.style.display = "none";
    BloqueV.style.display = "flex";
    Body.style.background = "#0b1b3d";
    NV.style.display = "none";
    NC.style.display = "flex"
})