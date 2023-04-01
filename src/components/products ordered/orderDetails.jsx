import React from "react";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Ordereditems from "./orderditems";
import {fetchproducts as FC} from "../features/productslice";
import OrdereditemsList from "./ordersListView";
import {useCheckBox} from "../utilities/customhookdoctitle";

function OrderedProducts() {
  const orders = useSelector((state) => state.PL.products);
  const [List, setList] = useState(false);
  const dispatch = useDispatch();
  const [PPrice, ppricecheck] = useCheckBox("Price");
  const [PName, pNamecheck] = useCheckBox("ProductName");
  const [POdt, pOdtcheck] = useCheckBox("Ordered DT");
  const [PDdt, pDdtcheck] = useCheckBox("Delivered DT");

  useEffect(() => {
    dispatch(FC("orders"));
  }, []);

  console.log("product ordered", orders);
  const ordereditems = orders.map((item, index) => (
    <Ordereditems
      key={index}
      product={item}
      PriceCheck={PPrice}
      Name={PName}
      ODT={POdt}
      PDDT={PDdt}
    />
  ));
  const ordereditemsList = orders.map((item, index) => (
    <OrdereditemsList
      key={index}
      product={item}
      PriceCheck={PPrice}
      Name={PName}
      ODT={POdt}
      PDDT={PDdt}
    />
  ));

  return (
    <>
      {orders.length ? <h1>Your orders:-</h1> : null}

      <div className="float-end row container-fluid">
        <span className="ms-3 col-sm-2">{ppricecheck}</span>
        <span className="ms-3 col-sm-2">{pDdtcheck}</span>
        <span className="ms-3 col-sm-2">{pOdtcheck}</span>
        <span className="ms-3 col-sm-2">{pNamecheck}</span>
        <button className="btn btn-text col" onClick={() => setList(!List)}>
          {List ? (
            <i
              className="bi bi-card-text"
              style={{color: "red", fontSize: "1rem"}}
            >
              view in Card
            </i>
          ) : (
            <i
              className="bi bi-grid-3x3-gap "
              style={{color: "white", fontSize: "1rem"}}
            >
              View in GridList
            </i>
          )}
        </button>
      </div>

      <div className="container row">
        {!List && (
          <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
            {ordereditems}
          </div>
        )}
      </div>

      {List && (
        <>
          <div className="row w-100 bg-primary text-white h1 m-2 shadow-lg container-fluid">
            <div className="col-sm-1">Img</div>
            {PName && <div className="col-sm-2">ProductName </div>}
            {PPrice && <div className="col-sm-1">Price</div>}
            {POdt && <div className="col-sm-2">Date Ordered</div>}
            {PDdt && <div className="col">Date Deliverd on</div>}
          </div>
          {ordereditemsList}
        </>
      )}

      {!orders.length && (
        <h1 className="text-primary text-center">
          You Haven't Ordered Anything yet...
        </h1>
      )}
    </>
  );
}

export default OrderedProducts;
