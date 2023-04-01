import Elcreducer, {ElcCartAction as EA} from "./ElecSlice";

describe("Add to cart reducer", () => {
  const initialState = {NoOfElcProducts: []};

  test("should return the initial state", () => {
    expect(Elcreducer(undefined, {type: "unknown"})).toEqual(initialState);
  });

  test("should handle addToCart", () => {
    const previousState = [
      {
        id: 1,
        ProductName: "vivo v23",
        Quantity: "20",
        price: 29999,
      },
    ];
    const actual = Elcreducer(previousState, {
      type: EA.AddToElcCart(),
    });
    expect(actual).toEqual([
      {
        id: 1,
        ProductName: "vivo v23",
        Quantity: "20",
        price: 29999,
      },
    ]);
  });
});
