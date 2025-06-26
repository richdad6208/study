test("data format", () => {
  const rawCart = [
    {
      userId: "u1",
      items: [
        { sku: "tv123", name: "TV", price: 1000, qty: 1 },
        { sku: "m123", name: "Mouse", price: 20, qty: 2 },
      ],
    },
    {
      userId: "u2",
      items: [{ sku: "l123", name: "Laptop", price: 1500, qty: 1 }],
    },
  ];

  const result = {};

  const isEqualTwoObjects = (a: object, b: object) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const expected = {
    u1: 1000 * 1 + 20 * 2,
    u2: 1500 * 1,
  };

  expect(isEqualTwoObjects(result, expected)).toBeTruthy();
});
