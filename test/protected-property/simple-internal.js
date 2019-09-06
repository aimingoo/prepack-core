class MyClass {
  internal protected x = 100;
}

class MyClassEx extends MyClass {
  check() {
    return x === this[internal.x];  // true
  }

  static print(a) {
    console.log(a[internal.x]);
  }
}

let a = new MyClassEx;
console.log(a.check()); // true
MyClassEx.print(a); // 100