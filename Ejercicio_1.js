
//calcular el área o perímetro de algunas figuras planas 
let figura = prompt("Ingrese un digito para decir si es TRIANGULO=1, RECTANGULO=2, CUADRADO=3, CIRCULO=4")
let base;
let altura;
let area;
let perimetro_a;
let perimetro_b;
let perimetro_c;
let perimetro_total;
let radio;
const pi=3.14;

switch (figura){
  case "1":
    base = parseInt (prompt("ingrese la base del triangulo:"));
    altura = parseInt (prompt("ingrese la altura del triangulo:"));
    area = ((base*altura)/2);
    perimetro_a = parseInt(prompt("ingrese el perimetro A:"));
    perimetro_b = parseInt(prompt("ingrese el perimetro B:"));
    perimetro_c = parseInt(prompt("ingrese el perimetro C:"));
    perimetro_total = perimetro_a+perimetro_b+perimetro_c;
    console.log ("El area del triangulo es: " + area);
    console.log ("El perimetro del triangulo es: " + perimetro_total);
  break;

  case"2":
    base = parseInt (prompt("ingrese la base del rectangulo:"));
    altura = parseInt (prompt("ingrese la altura del rectangulo:"));
    area = base*altura
    perimetro_a = parseInt(prompt("ingrese el perimetro A:"));
    perimetro_b = parseInt(prompt("ingrese el perimetro B:"));
    perimetro_total = (2*(perimetro_a+perimetro_b));
    console.log ("El area del rectangulo es: " + area);
    console.log ("El perimetro del rectangulo es: " + perimetro_total);
  break;

  case"3":
    altura = parseInt (prompt("ingrese la altura del cuadrado:"));
    area = Math.pow(altura,2)
    perimetro_a = (4*altura)
    console.log ("El Area del cuadrado es: " + area);
    console.log ("El perimetro del cuadrado es: " + perimetro_a);
  break;

  case"4":
    altura = parseInt (prompt("ingrese la circunferencia del circulo:"));
    radio = parseInt(prompt("ingrese el valor de radio:"));
    area = (pi * Math.pow(radio,2));
    perimetro_a = (2 * pi *Math.pow (radio, 2))
    console.log ("El Area del circulo es: " + area);
    console.log ("El perimetro del circulo es: " + perimetro_a);
  break;

default:
console.log ("Error de Opcion intente nuevamente")
}
