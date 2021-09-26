import React from "react";
import getProducts from "../data/ProductData";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const productsRawList = getProducts();
    const productsList = productsRawList.map((product) => {
      return {
        ...product,
        quantity: 0,
      };
    });
    this.setState({ products: productsList });
  }

  render() {
    return (
      <main>
        <h1>Product list</h1>
        <ul style={{ listStyle: "none" }}>
          {
            // I need to print a list of elements <li>...</li>
            // each of them is a product. Each list element will display basic product information.
            // I use the map function to iterate the products array.
            this.state.products.map((product) => (
              // Each element of the list need a different key, this is how React renders page update
              <li key={product.id}>
                <figure key={product.name} style={{ textAlign: "center" }}>
                  <img alt={product.description} src={product.image} />
                  <figcaption>
                    {product.name} - {product.price}€ <br />
                    {product.description}
                  </figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
}

export default ProductList;
