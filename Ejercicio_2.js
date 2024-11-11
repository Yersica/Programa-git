//Almacenar las edades de un grupo de 10 personas 
alert ("Ingrese 10 numeros correspodientes a edad: ");
lista_de_numeros = [];
lista_de_numeros [0] = parseInt(prompt('N1: '));
lista_de_numeros [1] = parseInt(prompt('N2: '));
lista_de_numeros [2] = parseInt(prompt('N3: '));
lista_de_numeros [3] = parseInt(prompt('N4: '));
lista_de_numeros [4] = parseInt(prompt('N5: '));
lista_de_numeros [5] = parseInt(prompt('N6: '));
lista_de_numeros [6] = parseInt(prompt('N7: '));
lista_de_numeros [7] = parseInt(prompt('NB: '));
lista_de_numeros [8] = parseInt(prompt('N9: '));
lista_de_numeros [9] = parseInt(prompt('N10: '));
menor_edad = 0;
mayor_edad = 0;
adulto_edad = 0;
datoinv = 0;
//CONDICIONALES
if (lista_de_numeros [0]>= 120){
    datoinv = datoinv +1;
    lista_de_numeros [0] = null;}

else if (lista_de_numeros [0] < 18){
    menor_edad = menor_edad + 1;}
else if (lista_de_numeros [0] >= 18 && lista_de_numeros [0] < 60){
    mayor_edad = mayor_edad +1;}
    else if(lista_de_numeros [0] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad +1;}
    
//CODICIONAL LISTA[1]//
    if (lista_de_numeros [1] >= 120) {
        datoinv = datoiny + 1;
        lista_de_numeros[1]= null;}
    else if (lista_de_numeros [1] < 18){
        menor_edad = menor_edad + 1;}
    else if (lista_de_numeros [1]>=18 && lista_de_numeros [1] <60) {
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [1] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad+1;}
//CONDICIONAL LISTA [2]

    if (lista_de_numeros [2] >= 120) {
        datoinv = datoiny + 1;
        lista_de_numeros[2]= null;}
    else if (lista_de_numeros [2] < 18){
        menor_edad = menor_edad + 1;}
    else if (lista_de_numeros [2]>=18 && lista_de_numeros [2] <60) {
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [2] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad+1;}

//CODICIONAL LISTA [3]//
    if (lista_de_numeros [3] >= 120){
        datoinv = datoinv + 1;
        lista_de_numeros[3] = null;}
    else if (lista_de_numeros [3] < 18){ 
        menor_edad = menor_edad + 1;}
    else if (lista_de_numeros [3] >= 18 && lista_de_numeros [3] < 60){
        mayor_edad = mayor_edad + 1;}
    else if (lista_de_numeros [3] >= 60){ 
        mayor_edad = mayor_edad + 1; 
        adulto_edad = adulto_edad +1;}
    
//CODICIONAL LISTA [4]//
    if (lista_de_numeros [4] >= 120){ 
        datoinv = datoinv + 1;
        lista_de_numeros [4] = null;}
    else if (lista_de_numeros [4]< 18 ){ 
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [4]>=18 && lista_de_numeros [4] <60){
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [4]>= 60){ 
        mayor_edad = mayor_edad +1; 
        adulto_edad =adulto_edad +1;}
    
//CONDICIONAL LIST [5]//
    if (lista_de_numeros [5] >= 120) {
        datoinv = datoinv +1;
        lista_de_numeros [5] = null;}
    else if (lista_de_numeros [5] < 18){ 
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [5] >= 18 && lista_de_numeros [5] <60){
        mayor_edad = mayor_edad +1}
    else if (lista_de_numeros [5] >= 60 ){ 
        mayor_edad = mayor_edad +1; 
        adulto_edad = adulto_edad + 1;}

//CODICIONAL LISTA[6]//
    if (lista_de_numeros [6] >= 120){
        datoinv = datoinv +1;
        lista_de_numeros [6] = null;}
    else if (lista_de_numeros [6]< 18){ 
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [6] >= 18 && lista_de_numeros [6]< 60) { 
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [6] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad +1;}

//CODICIONAL LISTA [7]//
    if (lista_de_numeros [7] >= 120){ 
        datoinv = datoinv + 1;
        lista_de_numeros [7] = null }
    else if (lista_de_numeros [7] < 18){
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [7] >= 18 && lista_de_numeros [7]< 60) { 
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [7] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad +1;}   

//CODICIONAL LISTA [8]//
    if (lista_de_numeros [8] >= 120){ 
        datoinv = datoinv + 1;
        lista_de_numeros [8] = null }
    else if (lista_de_numeros [8] < 18){
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [8] >= 18 && lista_de_numeros [8]< 60) { 
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [8] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad +1;} 

//CODICIONAL LISTA [9]//
    if (lista_de_numeros [9] >= 120){ 
        datoinv = datoinv + 1;
        lista_de_numeros [9] = null }
    else if (lista_de_numeros [9] < 18){
        menor_edad = menor_edad +1;}
    else if (lista_de_numeros [9] >= 18 && lista_de_numeros [9]< 60) { 
        mayor_edad = mayor_edad +1;}
    else if (lista_de_numeros [9] >= 60){
        mayor_edad = mayor_edad +1;
        adulto_edad = adulto_edad +1;} 

    promed = ((lista_de_numeros [0] + lista_de_numeros[1] + lista_de_numeros[2] + lista_de_numeros[3] +
             lista_de_numeros[4] + lista_de_numeros[5] + lista_de_numeros[6] + lista_de_numeros[7] + 
             lista_de_numeros[8] + lista_de_numeros[9]) / 10)
    console.log("Hay: "+ mayor_edad +" Mayor(es) de edad.");
    console.log("Hay: "+ menor_edad +" Menor(es) de edad.");
    console.log("Hay: "+ adulto_edad+" Adulto(s) Mayor(es).");
    console.log("El promedio de edades ingresado es: "+ promed+" Años."); 
    console.log("Datos invalidos ingresados en la lista: "+ datoinv);
    max = Math.max(lista_de_numeros[0], lista_de_numeros[1], lista_de_numeros[2], lista_de_numeros[3], 
        lista_de_numeros[4], lista_de_numeros[5], lista_de_numeros[6], lista_de_numeros[7],  
        lista_de_numeros[8],  lista_de_numeros[9]);
    mini = Math.min(lista_de_numeros[0], lista_de_numeros[1], lista_de_numeros[2], lista_de_numeros[3], 
        lista_de_numeros[4], lista_de_numeros[5], lista_de_numeros[6], lista_de_numeros[7],  
        lista_de_numeros[8],  lista_de_numeros[9]);
console.log("El numero menor ingresado es: " + Math.min(mini) + "<br>");
console.log("El numero mayor ingresado es: " + Math.max(max));
