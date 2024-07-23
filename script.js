function criptografar() {
    var textoOriginal = document.getElementById('texto').value.toLowerCase();
    var textoCriptografado = '';

    textoCriptografado = textoOriginal.replace(/e/g, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/g, 'imes');
    textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
    textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');

    document.getElementById('resultado').value = textoCriptografado;
}

function descriptografar() {
    var textoCriptografado = document.getElementById('texto').value.toLowerCase();
    var textoOriginal = '';

    textoOriginal = textoCriptografado.replace(/enter/g, 'e');
    textoOriginal = textoOriginal.replace(/imes/g, 'i');
    textoOriginal = textoOriginal.replace(/ai/g, 'a');
    textoOriginal = textoOriginal.replace(/ober/g, 'o');
    textoOriginal = textoOriginal.replace(/ufat/g, 'u');

    document.getElementById('resultado').value = textoOriginal;
}

function copiarTexto() {
    var resultado = document.getElementById('resultado').value;
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}