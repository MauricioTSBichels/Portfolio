function decifrarCifra() {
    var textoCifrado = document.getElementById("CT").value;
    var chave = parseInt(document.getElementById("Chave").value);

    var textoDecifrado = "";

    for (var i = 0; i < textoCifrado.length; i++) {
        var charCode = textoCifrado.charCodeAt(i);
        var message = document.getElementById('Decifrado');
        
        // Verifica se o caractere é uma letra maiúscula
        if (charCode >= 65 && charCode <= 90) {
            // Decifra o caractere
            var decifradoCharCode = ((charCode - 65 - chave + 26) % 26) + 65;
            textoDecifrado += String.fromCharCode(decifradoCharCode);
        }
        // Verifica se o caractere é uma letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            // Decifra o caractere
            var decifradoCharCode = ((charCode - 97 - chave + 26) % 26) + 97;
            textoDecifrado += String.fromCharCode(decifradoCharCode);
        }
        // Se o caractere não for uma letra, mantém ele sem mudanças
        else {
            textoDecifrado += textoCifrado.charAt(i);
        }
    }

    alert("Texto Decifrado: " + textoDecifrado);
    message.textContent = `O texto decifrado é: ${textoDecifrado}`;
}
