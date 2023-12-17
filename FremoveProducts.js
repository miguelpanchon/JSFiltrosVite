export function FremoveProducts() {
  const removeProducts = document.querySelectorAll(".product");
  removeProducts.forEach(product => {
    product.remove();
  });
}