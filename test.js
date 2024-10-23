const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

{
    "scripts"; {
      "test"; "jest"
    }
  }

  // One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 Yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const Yen = fromDollarToYen(3.5);

    const expected = (3.5 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("One Yen should be 0.00555976 GBP", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Ejemplo de conversión: 3.5 yenes a libras
    const pounds = fromYenToPound(3.5);

    const expected = (3.5 / 156.5) * 0.87;

    // Hago la comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665);
});

