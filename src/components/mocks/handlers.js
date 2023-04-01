import {rest} from "msw";
// https://mswjs.io/docs/basics/response-resolver

export const handlers = [
  rest.get("http://localhost:9999/Electronics", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          ProductName: "vivo v23",
          Quantity: "20",
          price: 29999,
        },
        {
          id: 2,
          ProductName: "ralme narzo 50",
          Quantity: "10",
          price: 19999,
        },
      ])
    );
  }),

  rest.post("http://localhost:9999/Electronics", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 3,
        ProductName: "one + 9",
        Quantity: "20",
        price: 59999,
      })
    );
  }),

  rest.put("http://localhost:9999/Electronics", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 3,
        ProductName: "one + 9",
        Quantity: "10",
        price: 59999,
      })
    );
  }),

  rest.delete("http://localhost:9999/Electronics", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 3,
        ProductName: "one + 9",
        Quantity: "10",
        price: 59999,
      })
    );
  }),
];

