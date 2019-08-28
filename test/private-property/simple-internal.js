class MyClass {
  internal private x = 100;

  check() {
    return x === this[internal.x];  // true
  }

  static print(a) {
    console.log(a[internal.x]);
  }
}

let a = new MyClass;
console.log(a.check()); // true
MyClass.print(a); // 100


