import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProductView from "./ProducDetailstInCart";
import { ElcCartAction as EC } from "../features/ElectronicsCart/ElecSlice";
import { orderAction as OA } from "../features/orders/ordersSlice";
import PriceDetails from "./PriceDetails";
import { updateProducts as UA } from "../features/productslice";
// import Zoom from "react-reveal/Zoom";

const ProductCart = (props) => {
  const [Total, settotal] = useState(0);
  const cart = useSelector((state) => state.ElcCart.NoOfElcProducts);
  const dispatch = useDispatch();

  //   totoalPrice=(price)=>{
  //     settotal((state)=>state+price)
  //   }

  useEffect(() => {
    cart.map((item) => settotal((state) => state + item[0].pprice));
  }, [cart]);

  console.log("in carts page", cart);

  const RemoveProduct = (pn) => {
    cart.map((item, index) => {
      if (item[0].pname == pn) {
        dispatch(EC.RemoveFromCart(index));
        settotal(0);
      }
    });
    console.log(pn);
  };

  const pdc = cart.map((item, index) => (
    <CartProductView key={index} product={item} remove={RemoveProduct} />
  ));

  const handleorder = (ProductName) => {
    {
      if (
        window.confirm("Are u sure to Order Only CASH ON DELIVERY available")
      ) {
        let newdata;
        let path;
        cart.map((items) =>
          dispatch(UA({ newdata: items[0], path: "orders" }))
        );
      }
    }
  };

  return (
    <>
      <h1 className="text-white">Your on Cart Page:-</h1>
      <div className="container m-5 p-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">{pdc}</div>
      </div>
      {cart.length ? (
        <>
          <h1 className="shadow-lg text-primary bg-light mb-5 ">
            Price Details:-
          </h1>

          <div className="container-fluid h1 bg-secondary shadow-lg ">
            <div className="row m-2 text-info ">
              <h1 className="col">Product Name</h1>
              <h1 className="col">Price</h1>
            </div>
            {cart.map((item, index) => (
              <PriceDetails
                pname={item[0].pname || item[0].ProductName}
                pprice={item[0].pprice || item[0].price}
              />
            ))}
            <i className="bi-cart4 text-primary " />
            <b> Total Price</b> -<i className="text-primary">{Total}</i>
            <button
              className="btn-lg btn-primary ms-3 h1 "
              onClick={handleorder}
            >
              PlaceYourOrder
            </button>
          </div>
        </>
      ) : (
        <h1 className=" text-danger text-center">
          Cart is Empty Add Some Products
        </h1>
      )}
    </>
  );
};

export default ProductCart;
// pdc-->product in cart
// <p>{JSON.stringify(pname)}</p>
