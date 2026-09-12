const response = await fetch(
  "https://6aa59c041397053d42bbb229.mockapi.io/products",
);
const data = await response.json();

const DUMMY_PRODUCTS = data;
export default DUMMY_PRODUCTS;
