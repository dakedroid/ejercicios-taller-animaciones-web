
// Esta funcion cambia el contenido de mi pagina
/*
    multi
    linea 
    comentario

*/

function mifuncion() {
    document.getElementById("titulo").innerHTML = "Programa de Suma";
    var suma = 2 + 2;
    document.getElementById("miparrafo").innerHTML = "La Suma de 2 + 2 = " + suma ;
    var multi = 3 * 3;
    window.alert(multi);
    console.log("Hola desde los registros")
    datos();
}

function datos(){

    const carros = [ "Chevy", "Camaro", "Vochido"];

    window.alert(carros);
}





function statusClima( ){

    var contenido =  document.getElementById("clima").textContent;

    if (contenido == 'LLUVIOSO'){
        window.alert("NO SALGAS");
        document.getElementById("clima").innerHTML = "NO SALGAS"
    }else if (contenido == 'SOLEADO'){
        window.alert("DIVIERTETE");
        document.getElementById("clima").innerHTML = "DIVIERTETE"
   
    }else if (contenido == 'ERROR'){
        
        /*
        for (let contador = 1; contador < 10; contador ++){
            
            if (contador < 5){
                document.write("ERROR <br>");
            }
        }   
        */

        let conta = 0;

        while(conta < 100){
            document.write("ERROR <br>"); 
            conta ++;
        }

    }


    // Ciclo While

    

    

    
}