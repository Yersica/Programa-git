alert("Ingrese 10 números y se ordenaran de forma ascendente y decreciente");

lista_De_Numeros = [];
lista_De_Numeros2 = [];

lista_De_Numeros [0] = parseInt(prompt('N°1: '));
lista_De_Numeros [1] = parseInt(prompt('N°2: '));
lista_De_Numeros [2] = parseInt(prompt('N°3: '));
lista_De_Numeros [3] = parseInt(prompt('N°4: '));
lista_De_Numeros [4] = parseInt(prompt('N°S: '));

lista_De_Numeros2 [0] = parseInt(prompt('N°6: '));
lista_De_Numeros2 [1] = parseInt(prompt('N°7: '));
lista_De_Numeros2 [2] = parseInt(prompt('N°8: '));
lista_De_Numeros2 [3] = parseInt(prompt('N°9: '));
lista_De_Numeros2 [4] = parseInt(prompt('N°10: '));

lista_De_Numeros = lista_De_Numeros.concat(lista_De_Numeros2);
lista_De_Numeros.sort((a,b) => {
    if(a== b) {
        return 0;
    }
    if(a < b){
        return -1;
    }
    return 1;
})
console.log("Lista Completa ordenada ascendente: "+ lista_De_Numeros);
console.log("Lista Completa ordenada descendente: "+ lista_De_Numeros.reverse())