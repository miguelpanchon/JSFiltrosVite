export function FpaintProducts(productsData, filterMaxAmount, filteredBrands) {
  var imgPath = "./public/"

  for (var i = 0; i < productsData.length; i++) {

    let idProducto = productsData[i]["id-producto"];
    let discount = productsData[i].discount;
    let URLImage = productsData[i]["URL-image"];
    let envio_gratis = productsData[i].envio_gratis;
    let nombre1 = productsData[i].nombre1;
    let nombre2 = productsData[i].nombre2;
    let marca = productsData[i].marca;
    let precio = productsData[i].precio;
    let PVPR = productsData[i].PVPR;
    let moneda = productsData[i].moneda;
    let nr_stars = productsData[i].nr_stars;
    let nr_reviews = productsData[i].nr_reviews;
    let patrocinado = productsData[i].patrocinado;
    let recibelo_manyana = productsData[i].recibelo_manyana;
    let seller = productsData[i].seller;
    let stock = productsData[i].stock;

    //transforming the variables values into something the user can understand
    envio_gratis == 1 ? envio_gratis = "Gratis" : envio_gratis = "No gratis";
    recibelo_manyana == 1 ? recibelo_manyana = "Recíbelo mañana" : recibelo_manyana = " ";
    let srcNr_stars = "";
    let patrocinadoLiteral = "\n";
    patrocinado == 1 ? patrocinadoLiteral = "Patrocinado" : patrocinadoLiteral = "";

    switch (nr_stars) {
      case 5:
        srcNr_stars = `src="./img/manually-put-together/valoracion-5.png"`;
        break;
      case 4:
        srcNr_stars = `src="./img/manually-put-together/valoracion-4.png"`;
        break;
      case 3:
        srcNr_stars = `src="./img/manually-put-together/valoracion-3.png"`;
        break;
      case 2:
        srcNr_stars = `src="./img/manually-put-together/valoracion-2.png"`;
        break;
      case 1:
        srcNr_stars = `src="./img/manually-put-together/valoracion-1.png"`;
        break;
      default:
        //check if there is something wrong (though ETL cleansing should be done previously)
        alert("Atencion, hay un producto que tiene un numero de estrellas de calidad que no está comprendido entre 1 y 5");
    }

    //declaración del código a inyectar
    const myDiv = document.createElement("div");
    let myHTML = `
    <article class="product">
      <p>Descuento:
        <span class="discount">${discount}%</span>
      </p>
      <p class="URLImage">
        <img class="image" src="${imgPath}${URLImage}"
          alt="imagen del producto">
      </p>

      <p>Envio:
        <span class="free-shipping"> ${envio_gratis}</span>
      </p>

      <p class="patrocinado"></p>
      <p class="name1"><strong>${nombre1}</strong></p>
      <p class="name2">${nombre2}</p>
      <p>PVPR:
        <span class="PVPR">${PVPR}</span>
        <span>${moneda}</span>
      </p>

      <p>Precio:
        <span class="precio"><strong>${precio}</strong></span>
        <span>${moneda}</span>
      </p>

      <p class="nr_stars">
      <img class="starImage" 
      ${srcNr_stars}
        alt="foto de ${nr_stars} estrellas">
    </p>

      <p>Nr Reviews:
        <span class="nr_reviews">${nr_reviews}</span>
     </p>

      <p class="patrocinado">${patrocinadoLiteral}</p>
      <p class="recibelo_manyana">${recibelo_manyana}</p>
      <p class="seller">Vende: ${seller}</p>
      <p class="stock">Stock: ${stock}</p>
    </article>`

    //passing the values and injecting the code
    myDiv.innerHTML = myHTML;
    const paintedProducts = document.querySelector(".products");
    if (precio <= filterMaxAmount) {
      if (filteredBrands == "" | filteredBrands == marca) {
        paintedProducts.append(myDiv);

      }
    }
  }

}