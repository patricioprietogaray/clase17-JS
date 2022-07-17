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

/////////////
