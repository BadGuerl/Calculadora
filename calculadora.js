class CalculatorClass {
  constructor(a, b) {
    this.num1 = a;
    this.num2 = b;
  }
  sum() {
    return this.num1 + this.num2;
  }
}

let calc = new CalculatorClass(5, 2);
const resultado = calc.sum();
console.log(resultado);


// _________________________________

function Calculator(a, b) {
  // quines propietats te
  // 2 -> num1, num2
  this.num1 = a;
  this.num2 = b;

  // quins metodes te
  this.suma = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };

  this.avg = function () {
    return this.num1 + this.num2 / 2
  };
};

const calculator = new Calculator(10, 5);

console.log(calculator.suma());
// calc.mul();

// calc.avg();