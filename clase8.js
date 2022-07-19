// me posiciono en la clase cards y voy creando 
// variables en orden de los elementos a crear 

const $cards = document.querySelector(".cards"),
      $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Crear un Text Node desde JS");

// creo cada elemento html con appendChild
// padre crea hijo en el orden que se detalla
$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);

// seteo los elementos agregados
$img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lagrange_points.jpg/330px-Lagrange_points.jpg");
$img.setAttribute("alt","Lagrange Points");
$img.setAttribute("width", "350");
$figcaption.appendChild($figcaptionText);

////////// crear una lista de 4 elementos (ul-li)
// con una iteracion. 
// JS de manera dinámica por medio de una iteracion
// inserte el contenido de un arreglo a la lista

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"],
      $ul = document.createElement("ul");

// agrega info al final del body 
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

// iterando
estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})


///////////// Fragmentos
////////// crear una lista de 4 elementos (ul-li)
// con una iteracion. 
// JS de manera dinámica por medio de una iteracion
// inserte el contenido de un arreglo a la lista

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"],
$ul = document.createElement("ul"),
// un framgmento es un trozo de DOM que puede
// contener fragmentos.
// Los fragmentos permiten evitar que se refresque
// todo el DOM. Solo se renderiza el fragmento en 
// cuestion.
$fragment = document.createDocumentFragment();


// iterando
estaciones.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$fragment.appendChild($li);
})


// agrega info al final del body 
document.write("<h3>Estaciones del año</h3>");
$ul.appendChild($fragment);
document.body.appendChild($ul);

/////////////templates o plantillas
///html
// <!-- template (plantilla), todo lo que se mete -->
// <!-- en la plantilla no se renderiza en el DOM. -->
// <!-- esto permite poder copiar y luego agregar -->
// <!-- el contenido. -->
// <section class="cards">
//     <template id="template-card">
//         <!-- si completo los datos no sale en 
//         el DOM por tratarse de un template -->
//         <figure class="card">
//             <img>
//             <figcaption>
//             </figcaption>
//         </figure>
//     </template>
// </section>

//JS
//template (plantilla), todo lo que se mete
// en la plantilla no se renderiza en el DOM.
// esto permite poder copiar y luego agregar
// el contenido.

const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    // fragmento es una porcion de html y se realiza
    // una inserccion una sola vez
    // UN FRAGMENTO NO ES UNA ETIQUETA HTML
    $fragment = document.createDocumentFragment();

const cardContent = [
    { 
        title: "Yoda",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dereck_Hard_Yoda_-_Little_Reality_2016_%28cropped%29.jpg/245px-Dereck_Hard_Yoda_-_Little_Reality_2016_%28cropped%29.jpg",
    },
    { 
        title: "Luke",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Luke_Skywalker_con_traje_de_piloto.jpg/245px-Luke_Skywalker_con_traje_de_piloto.jpg",
    },
    {
        title: "Darth Vader",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/245px-Star_Wars_-_Darth_Vader.jpg",
    },
    { 
        title: "Han Solo",
        img: "https://www.latercera.com/resizer/W9fdkhyLVb8mOSFohfWgxZBW0uc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/MOUXAGMDPFEVPFRA24CJ27G65U.jpg",
    },
]

const estiloFigCaption = {
        fontSize: "30px", 
        textAlign: "center",
    };

cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("img").setAttribute("width", "150");
    $template.querySelector("img").setAttribute("style", "margin-left: 7rem;");
    
    

    $template.querySelector("figcaption").textContent = el.title;
    $template.querySelector("figcaption").setAttribute("style", `font-size: ${estiloFigCaption.fontSize}; text-align: ${estiloFigCaption.textAlign};`);
    
    // aca recorre cada elemento del array cardContent
    let $clone = document.importNode($template, true);
    
    $fragment.appendChild($clone);
    // console.log($clone);
    // voy agregando cada objeto a $fragment (como si se tratara de una 
    // variable)
});


$cards.appendChild($fragment);
// muestro todo junto de una vez optimizando recursos del navegador.

//////////////
//Insertar nodos
//selector//.insertBefore(//Referencia del contenedor,
 /// referencia del nodo hijo);

 // Para insertar un nuevo nodo se usa appendChild()
 // para insertar un nodo al principio se usa insertBefore()


 /// reemplazando nodo
 //reemplazar un metodo existente
 //selector//.replaceChild(//Referencia del contenedor,
 /// selector.children[x]);

 /// eliminar nodo
 //eliminar un nodo existente
 //selector//.removeChild(/// selector.children);

 /// clonar nodo
 // usar el método cloneNode()
 // cuando se le pasa el argumento true, clona la etiqueta
 // que posea el selector, incluyendo, elementos y nodos hijos.
 // si como argumento se le pasa false, solo clonara la etiqueta
 // que posee el selector, ignora contenido e hijos.
 ////// selector.cloneNode(true);

 //////// JS Asincrónico
 //setTimeoit es una funcion que sirve para ejecutar un
 // codigo con un delay de tiempo en ms
 
// console.log("Comienza mi programa!")

//  setTimeout(function() {
//      console.log('Ejecutando un setTimeout')
//  }, 2000);

//  console.log("Termina mi programa");

 // la ejecucion es comienza, termina, ejecutando
 // por que no es secuencial? 
 // al ser asincrónico una vez finalizado el ejecutando
 // mostrará en pantalla el resultado. y como tarda
 // menos en imprimirse comienza y termina se muestran 
 // primero y segundo respectivamente.
// no es bloqueante o sea que el codigo no se traba
// el tiempo asignado de setTimeout.

// set interval es igual a setTimeout pero que se 
// ejecuta de manera constante (ideal para mostrar
// la hora actual todo el momento)

// setInterval(() => {
//     const hora=Date();
//     console.log(hora);
// }, 1000);

/*JS es un lenguaje de un hilo (single thread)
puede ejecutar una sola cosa a la vez.
Su modelo esta basado en un loop de eventos.
Para poder procesar instrucciones de forma simultanea
existe el asincronismo, para que al realizar una 
consulta que tarde tiempo no se bloquee la ejecución
del programa, ahorrando los problemas de concurrencia.

*/
// LIFO: Last In - First Out
// codigo sincrono
console.log("Código Sincrono");
console.log("Inicio");

function dos() {
    console.log("Dos");
}

function uno() {
    console.log("Uno")
    dos();
    console.log("tres");
}

uno();
console.log("Fin");
//// secuencia
//                        "dos"
//        "uno"   dos()   dos()     "tres"  
// uno()  uno()   uno()   uno()     uno()   uno()

/////////ejemplo de LIFO
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack.png
///////////
// Código asincrónico
console.log("Código asincrónico");
console.log("Inicio");

function dos() {
    setTimeout(function(){
        console.log("dos");
    }, 1000)
}

function uno() {
    setTimeout(function(){
        console.log("uno");
    }, 0);
    dos();
    console.log("tres");
}

uno();
console.log("Fin");

// inicio, tres, fin, uno, dos
// uno queda en segundo lugar
// dos queda en tercer lugar

//////JSON

const amigos = [
    {
        id: "1",
        nombre: "pepe",
    },
    {
        id: "2",
        nombre: "pepa",
    },
] 

console.log(amigos);
const amigosJson = JSON.stringify(amigos);
console.log(amigosJson);


////////Promesas

// las promesas son creadas a partir del constructor
// promise, el cual recibo como parámetro un callback
// que maneja tanto la resolucion como el rechazo de la 
// promesa.
// la promesa tiene tres estados:
// * pending: pendiente, estado inicial, no esta ni
//        cumplida ni rechazada.
// * fulfilled: operacion fue exitosa
// * rejected: la operación falló.

let promesa = new Promise(function (reject, resolve) {
    // código a ejecutar
});

// consumiendo promesas
// se maneja en tres casos: exito, error y 
// estado final. Cada uno recibe un callback
// * then: casos de exito, el callback se ejecuta
// cuando la promesa se cumple.
// * catch: el callback se ejecuta cuando se rechaza
// o hay error
// * finally: el callback se ejecuta cuando la promesa 
// esta saldada (settled) se cumpla o no.

promesa
    .then( () => {
        console.log('Promesa cumplida');
    })
    .catch( (error) => {
        console.log('Promesa rechazada', error);
    })
    .finally( () => {
        console.log('Promesa saldada');
    })

/////////




