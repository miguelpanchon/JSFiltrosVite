export function FpaintFilters(productsData, highestPrice) {
  //get the brands without repetitions
  const uniqueMarcasSet = new Set();
  const uniqueMarcasArray = productsData.reduce((acc, product) => {
    const marca = product.marca;
    if (!uniqueMarcasSet.has(marca)) {
      uniqueMarcasSet.add(marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  //Adjust the max value of the slider
  const slider = document.getElementById('slide');
  slider.max = highestPrice;
  console.log("slider.max vale: ", slider.max);

  // Filter 1: inyect the unique brand list into the select
  const selectElement = document.getElementById('mySelect');
  uniqueMarcasArray.forEach(marca => {
    const optionElement = document.createElement('option');
    optionElement.value = marca;
    optionElement.text = marca;
    selectElement.add(optionElement);
  });

  //filter 2: no need to inject anything
}
