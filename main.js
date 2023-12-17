console.log("main.js funciona");
import './style.css';
//get the data
import { products } from './productsData.js';
const productsData = products;
console.log("los productos se importan bien: ", productsData);

//inject js with info of the products in the main part of the html
var filterMaxAmount = 1000000000;
var filteredBrands = "";
import { FpaintProducts } from './FpaintProducts.js'
FpaintProducts(productsData, filterMaxAmount, filteredBrands);

// find highest priced telefone 
import { findHighestPrice } from './FhighestPrice';
const highestPrice = findHighestPrice(productsData);
console.log("el precio mas alto es: ", highestPrice);

import { FpaintFilters } from './FpaintFilters.js';
FpaintFilters(productsData, highestPrice);


// handling the input text filter
const textInput = document.getElementById('textInput');
textInput.addEventListener('input', function () {
  // Update the slider value with the input box value

  // Ensure it's a number
  //este debería ser el bueno:
  // const inputValue = parseInt(textInput.value) || 0;
  var inputValue = textInput.value;
  filterMaxAmount = inputValue;
  console.log("el valor en el input es: ", inputValue);
});

import { FremoveProducts } from './FremoveProducts.js';
const FilterButton = document.getElementById('BTNfilter');
FilterButton.addEventListener("click", function () {
  console.log("pulsando filtrar por valor de inputvalue: ", filterMaxAmount);
  FremoveProducts();
  FpaintProducts(productsData, filterMaxAmount, filteredBrands);
});

// handling the slider
// const sliderValue = document.getElementById('slide');
// sliderValue.addEventListener('change', function () {
//   inputValue = sliderValue.value;
// }


// handling the "limpiar filtros" button
import { FremoveFilters } from './FremoveFilters.js';
const limpiarFiltrosBtn = document.getElementById('eliminateFilters');
limpiarFiltrosBtn.addEventListener('click', function () {

  //FremoveFilters();
  // resetting the select filter
  selectElement.value = "";
  //reseting the input filter
  textInput.value = "";

  //resetting the slider position
  // slide.value = highestPrice;

  //reseting the variables to the initial situation ("no filter")
  filteredBrands = "";
  filterMaxAmount = highestPrice;
  FremoveProducts();
  FpaintProducts(productsData, filterMaxAmount, filteredBrands);
});


// handling the select filter
var selectElement = document.getElementById('mySelect');
selectElement.addEventListener('change', function () {
  filteredBrands = selectElement.value;
  //repaint products
  FremoveProducts();
  FpaintProducts(productsData, filterMaxAmount, filteredBrands);
});







