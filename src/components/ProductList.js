import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.products = [
      // TODO pass an arbitrary number to the component to control the number of element to display
      {
        name: "prod1",
        price: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores quisquam laudantium nam totam quidem id vero dolores libero excepturi!",
      },
      {
        name: "prod2",
        price: 2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores quisquam laudantium nam totam quidem id vero dolores libero excepturi!",
      },
      {
        name: "prod3",
        price: 3,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores quisquam laudantium nam totam quidem id vero dolores libero excepturi!",
      },
      {
        name: "prod4",
        price: 4,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores quisquam laudantium nam totam quidem id vero dolores libero excepturi!",
      },
    ];
  }

  render() {
    const productList = this.products.map((product) => (
      <li key={product.name}>
        {product.name} - {product.price}€ <br />
        {product.description}
      </li>
    ));

    return <ul>{productList}</ul>;
  }
}

export default ProductList;
