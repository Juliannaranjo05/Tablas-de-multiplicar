/**
 * Numeros del 1 al 10
 * Autor: Julian Naranjo
 * Fecha: 08/07/2024
 */

    document.addEventListener('DOMContentLoaded', function(){
        let tabla = [];
        let multiplo = [];
        let iteracionTabla;
        let iteracionMultiplicar;
        let printResultado = '';

        for(iteracionTabla=0;iteracionTabla<10;iteracionTabla++){
            let multiplicar = iteracionTabla + 1;
            multiplo = [];
            for(iteracionMultiplicar=0;iteracionMultiplicar<10;iteracionMultiplicar++) {
                let multiplicando = iteracionMultiplicar + 1;
                let producto = multiplicar * multiplicando;
                multiplo.push(producto);
            }
            tabla.push(multiplo);
            console.log(tabla.push(multiplo));
        }
        for(iteracionTabla=0;iteracionTabla<tabla.length;iteracionTabla++){
            multiplicar = iteracionTabla + 1;

            printResultado+= '    <div class="card">'
            printResultado+= '    <div class="card-body">'

            printResultado+= '    <table class="table">' 
            printResultado+= '    <h5 class="card-title">TABLA '+multiplicar+'</h5>'

            for(iteracionMultiplicar=0;iteracionMultiplicar<10;iteracionMultiplicar++) {
                multiplicando = iteracionMultiplicar + 1;
                printResultado+= '<tr><td>'+multiplicar+' X '+multiplicando+' = </td><td>' +tabla[iteracionTabla][iteracionMultiplicar]+'</td></tr>';
            }
            printResultado+= '    </table>'
            printResultado+= '    </div>'
            printResultado+= '    </div>'
   
        }
        document.getElementById('resultado-tablas').innerHTML = printResultado;
    });