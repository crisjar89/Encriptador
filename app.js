const texto_nuevo = document.querySelector ("#texto-nuevo");
const texto_encriptado = document.querySelector ("#texto-encriptado");

const matriz_code =[
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],  // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];
function botonEncriptar() {
    const texto = encriptar(texto_nuevo.value);
    texto_encriptado.value = texto;
    texto_nuevo.value = "";
}
function encriptar(textoEncriptado){
    for(let i = 0; i < matriz_code.length; i++) {
        if(textoEncriptado.includes(matriz_code[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return textoEncriptado
}
const matriz_dos =[
    ["enter", "e"], // indice 0
    ["imes", "i"],  // indice 1
    ["ai", "a"],  // indice 2
    ["ober", "o"],  // indice 3
    ["ufat", "u"],  // indice 4
];
function botonDesncriptar() {
    const textodos = desencriptar(texto_nuevo.value);
    texto_encriptado.value = textodos;
    texto_nuevo.value = "";
}
function desencriptar(textoDesencriptado){
    for(let i = 0; i < matriz_dos.length; i++) {
        if(textoDesencriptado.includes(matriz_dos[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_dos[i][0],
                matriz_dos[i][1]
            )
        }
    }
    return textoDesencriptado
}