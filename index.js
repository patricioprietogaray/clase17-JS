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
    $template.querySelector("img").setAttribute("style", "margin: 2rem;");
    
    

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