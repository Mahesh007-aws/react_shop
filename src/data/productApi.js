import axios from "axios";

export default class ProductApi {
  static getAllProducts(jpd) {
    axios
      .get("http://localhost:9999/products")
      .then((response) => {
        jpd(response.data);
        console.log(response, jpd);
      })
      .catch((error) => {
        throw error;
      });
  }

  static addProducts(newdata) {
    axios
      .post("http://localhost:9999/products", newdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw error;
      });
  }
}
