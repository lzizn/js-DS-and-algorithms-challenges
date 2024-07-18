/**
 * @typedef Product
 * @type {object}
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {number} quantity - The quantity sold of the product.
 */

/**
 * @param {Product[]} products - The array of product objects.
 */
const getSalesAmount = (products) => {
  return products.reduce((sum, { quantity, price }) => {
    sum += price * quantity;
    return sum;
  }, 0);
};

/**
 * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
 * @param {Product[]} products - The array of product objects.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} - The total sales amount including tax.
 */
function calculateTotalSalesWithTax(products, taxRate) {
  const salesAmount = getSalesAmount(products);

  const taxAmount = salesAmount * (taxRate / 100);

  const salesTotalWithTax = salesAmount + taxAmount;
  return salesTotalWithTax;
}

module.exports = calculateTotalSalesWithTax;
