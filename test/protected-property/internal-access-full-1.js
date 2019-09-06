// internal with parent/super class support

class MyClass {
  internal protected x = 100;

  static print(a) {
    console.log(a[internal.x]);
  }
}

class MyClassEx extends MyClass {
  check() {
    return x === this[internal.x];  // true
  }

  static print(a) {
    console.log(a[internal.x]);
  }

  static print2(a) {
  	super.print(a);
  }
}

let a = new MyClassEx;
console.log(a.check()); // true
MyClassEx.print(a); // 100

// check at root
MyClass.print(a); // 100
MyClassEx.print2(a); // 100