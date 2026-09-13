const response = await fetch(
  "https://6aa6628bd7765db985075a6c.mockapi.io/products",
);
const data = await response.json();

const DUMMY_PRODUCTS = data;
export default DUMMY_PRODUCTS;
