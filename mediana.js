const lista1 = [
800,
200,
6000,
4000
];

const lista6 = [
    800,
    200,
    6000,
    4000,
    565,
    4564,
    8769,
    98
    ];

lista1.sort((a,b)=>a-b);
let mediana;


const mitadLista1 = parseInt(lista6.length/2);

function esPar(numero){
    if(numero % 2 === 0)
    {
    return true;
    }else
    {
    return false;
    }
    }

function calcularMediaAritmetica(lista){
         const sumaLista = lista.reduce(
            function(valorAcumulado = 0,nuevoElemento){
                return valorAcumulado + nuevoElemento;            
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista
    }

if (esPar(lista6.length))
{
const elemento1=lista6[mitadLista1-1];
const elemento2=lista6[mitadLista1];
const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
mediana = promedioElemento1y2;
}
else
{
    mediana = lista6[mitadLista1];
}


function calcularMediana(lista)
{
    lista.sort((a,b)=>a-b);
    const mitadLista2 = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const elemento1=lista[mitadLista2-1];
        const elemento2=lista[mitadLista2];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;

    }else{
        mediana = lista[mitadLista2];
    }
    return mediana;
}








