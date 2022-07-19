// en consola puedo ver la respuesta de la promesa

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json) )

// cuando hay un ()(); significa que es una IIFE
// IIFE: Expresión de función ejecutada inmediatamente
// son funciones que se ejecutan tan pronto con se definen 


// La función se convierte en una expresión de función que es 
// ejecutada inmediatamente. La variable dentro de la expresíon no 
// puede ser accesada desde afuera.

// (lo que se ejecuta adentro se auto llama)();

// desde HTML :   <ol id="fetch"></ol>
const $fetch = document.getElementById("fetch"), //me posiciono en el id fetch
    $fragment = document.createDocumentFragment(); //cargo todo lo que 
    // encuentro en el resultado del codigo en la variable $fragment para mostrarlo
    // posteriormente

// fetch(): Quiero hacer una consulta de esto.... una base de datos de tipo JSON

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then($res => console.log($res))
//     .catch($err => console.log('Ocurrió un error',$err));

// parsear (parse) o formatear la respuesta como json en $res.json() [método]

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then($res => $res.json())
//     // la transformacion es una respuesta asincrónica figura como pendiente
//     // porque la respuesta tomo cierto tiempo en llegar: then = luego
    
//     // modificamos el siguiente codigo para mostrarlo en un ol - li
//     // .then($json => console.log($json))
//     .then($json => {
//         $json.forEach(usuario => {
//             const $li = document.createElement("li");
//             $li.innerHTML = `${usuario.name} -- ${usuario.email}`;
//             $fragment.appendChild($li);
//         });
//         // muestro toda la info dentro de la etiqueta ol - li
//         $fetch.appendChild($fragment)
//     })
//     // se debe hacer un ternario variable => ok ? si : no 
//     // para forzar la respuesta del catch
//     .catch($err => { 
//         const mensaje = `<p>Ocurrió un error ${$err}!</p>`;
//         document.write(mensaje);
//     }) //console.log('Ocurrió un error',$err));

fetch('https://jsonplaceholder.typicode.com/users')
// para forzar la respuesta del catch
    .then($res => $res.ok ? $res.json() : Promise.reject($res))
    // cuando es ok retorna $res.json() y el segundo .then lo toma
    // .then($res => $res.ok ? 'hola' : Promise.reject($res))
    .then($json => {
    // .then($json => {
    //     console.log($json);
        $json.forEach(usuario => {
            const $li = document.createElement("li");
            $li.innerHTML = `${usuario.name} -- ${usuario.email}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment)
    })
     .catch($err => { 

        const mensaje = 'Ocurrió un error';
        // `<p>Ocurrió un error ${$err.status}!</p>`;
        // document.write(mensaje);
        $fetch.innerHTML = `Error ${$err.status}: ${mensaje}`
        console.log($err);
     }) 
     .finally(() => {
        // $fetch.innerHTML = "Terminó de cargar!";
        // si uso el dom no muestra el resultado o error
        console.log('Terminó de cargar!')
     })
 