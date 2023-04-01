import React, {useEffect} from "react";
import renderer from "react-test-renderer";
import App from "../App";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";
import {renderWithRouter} from "../test-utils";
import {AddProduct} from "../components/AddProduct/addproduct";

const mockstore = configureStore([]);
describe("should test a snap of nav  Page", () => {
  let Store;
  let component;
  beforeEach(() => {
    Store = mockstore({
      Auth: {isLoggedin: true},
      ElcCart: {NoOfElcProducts: [1, 2, 3]},
    });
    component = renderer.create(
      <Provider store={Store}>
        <App />
      </Provider>
    );
  });
  it("renders App correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe.skip("should tset Add product Page by admin with A Snap", () => {
  let Store;
  let component;
  beforeEach(() => {
    Store = mockstore({
      Auth: {adminloggedin: true},
      ElcCart: {NoOfElcProducts: [1, 2, 3]},
    });
    component = renderer.create(
      <Provider store={Store}>
        <AddProduct />
      </Provider>
    );
  });
  it("renders Add product page by admin correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

// describe("snap of Allproducts page", () => {
//   it("renders correctly Allproducts PAge", () => {
//     const tree = renderer(
//       <MemoryRouter>
//         {renderWithRouter(<App />, {route: "/products"})}
//       </MemoryRouter>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
