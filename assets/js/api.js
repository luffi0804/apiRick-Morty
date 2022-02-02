// creamos una variable y si la url no va cambiar la declaramos como const
const API = "https://rickandmortyapi.com/api/character";

// consumimos la API, esa funcion esta esperando un parametro-- creamos la funcion y se ejecuta  el vuelve a la funcion --llama a la función y le envía API como parametro
// fetch() nos permite consumir la apien el then guardamos en una variable lo que me trajo del json
// se observa los json y miro lo que realmente necesito

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API :", error);
    });
};

// forEach para traer solo lo que quiero --- cuando se crea DOM recordar usar comilla simple -- hacemos interpolacio $
const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title font" >Name: ${ch.name}</h5>`;
    html +=  '<br>'
    html += `<p class="card-text font ">Gender: ${ch.gender}</p>`;
    html += `<p class="card-text font">Species: ${ch.species}</p>`;
    html += `<p class="card-text font">Status: ${ch.status}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

// construimos el metodo pagination con dos variables vacias, tomamos del json la variable, se hace el ifelse traemos el json, junto con la variable del json para activar la pagination (disabled es una clase bootstrap)
// como hacer una optimizacion el else queda vacio, porque ya lo habiamos creado vacio, entonces no es necesario
const pagination = (info) => {
  // let prevDisabled = "";
  // let nextDisabled = "";
  let html ="";

  // if (info.prev == null) {
  //   prevDisabled = "disabled";
  // }
// operador ternario para optimizar
  // info.prev == null ?  "disabled" : ""

  // if (info.next == null) {
  //   nextDisabled = "disabled";
  // }

  // info.next == null ? "disabled" :  ""

  // podemos meter un ternario en una interpolacion
 html += `<li class=" page-item ${info.prev == null ? "disabled" : ""}"><a class="page-link font text-color cursor" onclick="getAPI('${info.prev}')">Preview</a></li> `;
 html += `<li class="page-item ${info.next == null ? "disabled" : ""}"><a class="page-link font text-color cursor " onclick="getAPI('${info.next}')">Next</a></li> `;

 document.getElementById("pagination").innerHTML = html;
};

// otra forma de optimizar codigo

getAPI(API);
