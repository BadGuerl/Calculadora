class User {
  // field
  isAdmin = false;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get description() {
    return `${xavi.name} tiene ${xavi.age}años. Es admin? ${xavi.isAdmin}`
  }

  growUp(years) {
    this.age += years;
  }
}

const xavi = new User('Xavi', 47);
xavi.growUp(2);
console.log(xavi.description);