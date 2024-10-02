function pow(x, n) {
  if (n < 0) {
    alert("Отрицательные значения 'n' не поддерживаются");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
alert(pow(2, 4))

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;//простое число

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

describe("pow", function() {

  it("возводит число в степень n", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 3), 27);
  });

});

describe("pow", function() {

  it("2 в степени 3 будет 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 в степени 3 будет 27", function() {
    assert.equal(pow(3, 3), 27);
  });

});

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});