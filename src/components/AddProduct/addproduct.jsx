import {ErrorMessage, useFormik} from "formik";
import {Fragment, useState} from "react";
import {object, string, number} from "yup";
import ProductApi from "../../data/productApi";
import {Prompt} from "react-router-dom";
import {
  updateProducts as addaction,
  editProducts as EA,
} from "../features/productslice";
import {useSelector, useDispatch} from "react-redux";

const validationSchema = object({
  ProductName: string()
    .required("Enter a ProductName")
    .min(3, "minimum 3 charactters long"),
  Quantity: number()
    .required("Enter some quantity Requried!")
    .min(10, "Quantity must be atleast 10"),
  price: number()
    .required("choose a valid price ")
    .min(50, "price must be atleast 50"),
  url: string().required("Enter Image url to dispaly product "),
  desc: string().required("Enter product description"),
  Manu: string().required("Enter Manufacture details"),
  PId: string().required("Enter Product Id").min(8, "product Id as ALMEL00_"),
});

// const onSubmit= (values) => {
//   dispatch(addaction(values));
//   console.log("after submit", values, "added products");
// };

export const AddProduct = (props) => {
  const update = props.update || false;

  const dispatch = useDispatch();
  const [Path, setpath] = useState(`Electronics\\`);

  const initialValues = {
    ProductName: update ? props.pd.ProductName : "",
    Quantity: update ? props.pd.Quantity : 10,
    price: update ? props.pd.price : 6000,
    url: update ? props.pd.url : "",
    desc: update ? props.pd.desc : "",
    Manu: update ? props.pd.Manu : "",
    PId: update ? props.pd.PId : "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      let newdata;
      let path;
      update
        ? dispatch(EA({newdata: values, path: Path + props.pd.id}))
        : dispatch(addaction({newdata: values, path: Path}));
      console.log("after submit", values, "added products");
    },
  });

  return (
    <div
      className="container  text-light  mt-5 w-50"
      style={{background: " linear-gradient(to top ,#061161,#ccc,#c21500)"}}
    >
      <h3>{update ? "UPDATE" : "ADD"} Products In The Store Here</h3>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="pName">
          <b> productName</b>
        </label>
        <input
          className="m-3 border-primary w-50"
          type="text"
          name="ProductName"
          id="pName"
          placeholder="enter products name like vivo,techno,realme,iphone.."
          {...formik.getFieldProps("ProductName")}
        />
        {formik.touched.ProductName && formik.errors.ProductName ? (
          <div className="alert-danger w-50 ">{formik.errors.ProductName}</div>
        ) : null}
        <br />
        <label htmlFor="pQuantity">
          <b>Quantity</b>
        </label>
        <input
          className="ms-5 border-primary w-50"
          type="number"
          name="Quantity"
          id="pQuantity"
          {...formik.getFieldProps("Quantity")}
        />
        {formik.touched.Quantity && formik.errors.Quantity ? (
          <div className="alert-danger w-50 ">{formik.errors.Quantity}</div>
        ) : null}

        <br />
        <br />

        <label htmlFor="pprice">
          <strong>price</strong>
        </label>
        <input
          className="ms-5 bg-warning w-50"
          type="range"
          name="price"
          id="pprice"
          min="0"
          max="100000"
          {...formik.getFieldProps("price")}
        />
        <span className=" bg-primary p-2 ms-3">
          <input
            type="number"
            name="price"
            {...formik.getFieldProps("price")}
          />
        </span>
        {formik.touched.price && formik.errors.price ? (
          <div className="alert-danger w-50">{formik.errors.price}</div>
        ) : null}
        <br />
        <label htmlFor="pimg">
          <b> Image URL</b>
        </label>
        <input
          className="m-3 border-primary w-50"
          type="text"
          name="url"
          id="pimg"
          placeholder="enter products image URL"
          {...formik.getFieldProps("url")}
        />
        {formik.touched.url && formik.errors.url ? (
          <div className="alert-danger w-50 ">{formik.errors.url}</div>
        ) : null}
        <br />
        <label htmlFor="Desc">
          <b> Description </b>
        </label>
        <input
          className="m-3 border-primary w-50"
          type="text"
          name="desc"
          id="Desc"
          placeholder="enter Product Description"
          {...formik.getFieldProps("desc")}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div className="alert-danger w-50 ">{formik.errors.desc}</div>
        ) : null}
        <br />
        <label htmlFor="MANU">
          <b> Manufacture</b>
        </label>
        <input
          className="m-3 border-primary w-50"
          type="text"
          name="Manu"
          id="MANU"
          placeholder="enter products name like vivo,techno,realme,iphone.."
          {...formik.getFieldProps("Manu")}
        />
        {formik.touched.Manu && formik.errors.Manu ? (
          <div className="alert-danger w-50 ">{formik.errors.Manu}</div>
        ) : null}
        <br />
        <label htmlFor="PID">
          <b> product ID</b>
        </label>
        <input
          className="m-3 border-primary w-50"
          type="text"
          name="PId"
          id="PID"
          placeholder="enter Product Id ELC-ALMEL00_ frui-ALMFR00_ GROC-ALMGR00_ "
          {...formik.getFieldProps("PId")}
        />
        {formik.touched.PId && formik.errors.PId ? (
          <div className="alert-danger w-50 ">{formik.errors.PId}</div>
        ) : null}
        <br />
        <label htmlFor="path">choose where to add </label>
        <select
          value={Path}
          onChange={(e) => setpath(e.target.value)}
          id="path"
        >
          <option value="Electronics">Electronics</option>
          <option value="Grocerys">Grocerys</option>
          <option value="Fruits">Fruits</option>
        </select>
        <Prompt
          when={formik.dirty}
          message="Form Data Will be Lost Are U Sure Leaving?"
        />
        <button
          type="submit"
          className="m-3 btn btn-primary  "
          disabled={!(formik.isValid && formik.dirty)}
        >
          {update ? "update" : "Submit"}
        </button>

        {/* {props.update && (
          <button className="m-3 btn btn-primary ">update</button>
        )} */}
      </form>
    </div>
  );
};
