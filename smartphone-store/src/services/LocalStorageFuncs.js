// Este é um script em JavaScript que contém duas funções para manipulação do localStorage do navegador.

// A função "setItem" é usada para armazenar um valor no localStorage. Ela recebe uma chave (key) e um valor (value) como argumentos.
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// A função "getItem" é usada para obter um valor armazenado no localStorage com base na chave fornecida.
// Ela recebe a chave (key) como argumento e usa a função localStorage.getItem para recuperar o valor associado a essa chave no localStorage.
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
