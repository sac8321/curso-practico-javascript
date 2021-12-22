//Codigo del cuadrado
console.group("cuadrado");
console.log("Hello world!");
//const ladoCuadrado = 5 ;
//console.log("Loslados del cuadrado miden:"+ladoCuadrado+"cm");

function perimetroCuadrado(ladoCuadrado)
{
   return ladoCuadrado*4 ;
} 
//console.log("El perimetro del cuadrado es :"+ladoCuadrado+"cm");

//const areaCuadrado = ladoCuadrado *ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El area del cuadrado es :"+ladoCuadrado+"cm2");
console.groupEnd();
//Codigo del triangulo
// console.group("triangulo");
// const ladoTriangulo1 = 6 ;
// const ladoTriangulo2 = 6 ;
// const BaseTriangulo3 = 4 ;
// const alturaTriangulo = 5.5;
// const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+BaseTriangulo3;
// const areaTriangulo = (BaseTriangulo3 * alturaTriangulo)/2;


// console.log( 
// "Los lados del triangulo miden:"
// +ladoTriangulo1
// +"cm, "
// +ladoTriangulo2
// +"cm, "
// +BaseTriangulo3
// +"cm"
// );

// console.log("La altura del triangulo es de:"+alturaTriangulo+"cm");
function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
}
function areaTriangulo(base,altura)
{
    return (base*altura)/2;
}



//console.log("El perimetro del triangulo es de "+perimetroTriangulo+"cm");

//console.log("El  area del triangulo es de :"+areaTriangulo+"cm");

console.groupEnd();


//Codigo del circulo
console.group("circulo");
//radio

function diametroCirculo(radio){
    return radio*2;
}

// const radioCirculo = 4;
// console.log("radio de circuo :"+radioCirculo+"cm");
// //diametro
// const diametroCirculo= radioCirculo *2;
// console.log("diametro de circulo :"+diametroCirculo+"cm");
// //pi
 const pi = Math.PI;

 function perimetroCirculo(radio){
     const diametro= diametroCirculo(radio);
    return diametro * pi;
 }

 function areaCirculo(radio){
     return (radio*radio)*pi;
 }
// console.log("pi:"+pi+"cm");
// //circunferencia
// const perimetroCirulo = diametroCirculo*pi;
// console.log(" perimetro circulo :"+perimetroCirulo+"cm");
// //area
// const areaCirculo= (radioCirculo*radioCirculo)*pi;
// console.log("area circulo :"+areaCirculo+"cm");

console.groupEnd();


//Interacci[on] con HTML
function calcularPerimtroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimtro = perimetroCuadrado(value);
    alert(perimtro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}