const layout = require("../layout");

module.exports = ({ products }) => {
  const renderedProducts = products
    .map((product) => `<div>${product.title}</div>`)
    .join("");

  return layout({
    title: "Products",
    content: `
      <h1 class="title">Products</h1>
      ${renderedProducts}
    `,
  });
};
