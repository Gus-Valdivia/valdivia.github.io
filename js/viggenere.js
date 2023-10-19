let Cifrar_btnV = document.getElementById("Cifrar_btnV");
let Descifrar_btnV = document.getElementById("Descifrar_btnV");
let Txt_Vig = document.getElementById("txt")
let Des_Vig = document.getElementById("txtClave");
let Text_Area_Vig = document.getElementById("res");
let CopiarV = document.getElementById("CopiarV");

var viggenere = viggenere || (function () {
    var doStaff = function (txt, desp, action) {
        var replace = (function () {
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l = abc.length;

            return function (c) {
                var i = abc.indexOf(c.toLowerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        //cifrar
                        pos += desp;
                        pos = (pos >= l) ? pos - l : pos;
                    } else {
                        //descifrar
                        pos -= desp;
                        pos = (pos < 0) ? l + pos : pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();

        var re = (/([a-z])/ig);
        return String(txt).replace(re, function (match) {
            return replace(match);
        });
    };
    return {
        encode: function (txt, desp) {
            return doStaff(txt, desp, true);
        },
        decode: function (txt, desp) {
            return doStaff(txt, desp, false);
        }

    };
})();

function longitudCifrar() {
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (clave.length > texto.length) {
        alert("La clave no puede ser mayor al texto a cifrar")
    } else {
        codificar(texto, clave);
    }
}

function longitudDescifrar() {
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (clave.length > texto.length) {
        alert("La clave no puede ser mayor al texto a cifrar")
    } else {
        decodificar(texto, clave);
    }
}

function codificar(texto, clave) {
    var resultado = "";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for (var i = 0; i < charATexto.length; i++) {
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.encode(charTexto, (des >= 26) ? des % 26 : des);
        indiceClave++;

        if (indiceClave >= clave.length) {
            indiceClave = 0;
        }
    }
    document.getElementById("res").value = resultado;
}

function decodificar(texto, clave) {
    var resultado = "";
    var indiceClave = 0;
    var charATexto = texto.split('');

    for (var i = 0; i < charATexto.length; i++) {
        var des = obIndiceClave(clave.charAt(indiceClave));
        var charTexto = charATexto[i];

        resultado += viggenere.decode(charTexto, (des >= 26) ? des % 26 : des);
        indiceClave++;

        if (indiceClave >= clave.length) {
            indiceClave = 0;
        }
    }
    document.getElementById("res").value = resultado;
}

function obIndiceClave(reco) {
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return abc.indexOf(reco.toLowerCase());
}

function camposVacios() {
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (texto == "") {
        alert("Ingrese un texto para cifrar")
    }
    if (clave == "") {
        alert("Ingrese una clave para cifrar");
    }
}

function colocarvig() {
    var copiar = document.getElementById("res").value;
    document.getElementById("txt").value = copiar
}

function reiniciarvig() {
    document.getElementById("txt").value = "";
    document.getElementById("txtClave").value = "";
    document.getElementById("res").innerText = "";
    Text_Area_Vig.style.display = "none";
    CopiarV.style.display = "none";
}

NC.addEventListener("click", () => {
    BloqueC.style.display = "flex";
    BloqueV.style.display = "none";
    Body.style.background = "#0b363d";
    NV.style.display = "flex";
    NC.style.display = "none"
});

Cifrar_btnV.addEventListener("click", () => {
    if (Des_Vig.value != "" && Text_Area_Vig.value != "") {
        Text_Area_Vig.style.display = "flex"
        CopiarV.style.display = "flex";
    }
    if (Des_Vig.value == "" && Text_Area_Vig.value != "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE SU FRASE A CIFRAR</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
    if (Des_Vig.value != "" && Text_Area_Vig.value == "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE EL DESPLAZAMIENTO DE SU CIFRADO</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
    if (Des_Vig.value == "" && Text_Area_Vig.value == "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE LOS DATOS SOLICITADOS</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
});

Descifrar_btnV.addEventListener("click", () => {
    if (Des_Vig.value != "" && Text_Area_Vig.value != "") {
        Text_Area_Vig.style.display = "flex";
        CopiarV.style.display = "flex";
    }
    if (Des_Vig.value == "" && Text_Area_Vig.value != "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE EL DESPLAZAMIENTO DE SU CIFRADO</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
    if (Des_Vig.value != "" && Text_Area_Vig.value == "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE SU FRASE A CIFRAR</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
    if (Des_Vig.value == "" && Text_Area_Vig.value == "") {
        Swal.fire({
            icon: 'error',
            title: "<span class='Alert_Tittle'>INGRESE LOS DATOS SOLICITADOS</span>",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    }
});