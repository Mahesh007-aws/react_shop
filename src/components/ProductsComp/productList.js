import React from "react";
import Product from "./product";

const productList = (props) => {
  let pd = props.products.map((product) => {
    return props.search == "" || product.ProductName.includes(props.search) ? (
      <Product
        key={product.id}
        pid={product.id}
        pname={product.ProductName}
        pquantity={product.Quantity}
        pprice={product.price}
        pimg={product.url}
      ></Product>
    ) : null;
  });
  return (
    <>
      {/* <table className="table table-striped w-50 m-4">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price(Rs/-)</th>
          </tr>
        </thead>
        <tbody>{pd}</tbody>
      </table> */}
      <div className="row row-cols-1 row-cols-md-4 g-4">{pd}</div>
    </>
  );
};

export default productList;
