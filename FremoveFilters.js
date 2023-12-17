export function FremoveFilters(selectValue, textInputValue, filteredBrands) {

  // resetting the select filter
  selectElement.value = "";

  //reseting the input filter
  textInput.value = "";

  //resetting the slider position
  // slide.value = highestPrice;

  //reseting the variables to the initial situation ("no filter")
  filteredBrands = "";
  filterMaxAmount = highestPrice;

}