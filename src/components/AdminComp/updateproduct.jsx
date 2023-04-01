import React from "react";
import {AddProduct} from "../AddProduct/addproduct";
import {useSelector, useDispatch} from "react-redux";
import {fetchproducts as fectchaction} from "../features/productslice";

function UpdateProduct(props) {
  const data = useSelector((state) => state.PL);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fectchaction("Electronics"));
  }, []);

  const p = data.products.filter((d) => {
    if (d.ProductName === props.match.params.pname) {
      return d;
    }
  });
  console.log("update page", props, "data", data, p[0]);
  return <AddProduct update={true} pd={p[0]} />;
}

export default UpdateProduct;

