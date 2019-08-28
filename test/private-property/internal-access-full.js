class MyClass {
  internal private x = 100;
  private y = 200;

  // publish for test
  get x() {
    return x;
  }
  set x(v) {
    x = v;
  }

  compare(b) {
    return x ===  b[internal.x];
  }

  static compare(a, b) {
    return a[internal.x] === b[internal.x];
  }

  static check(o) {
    console.log([typeof internal, internal.x, internal.y]); // 'object', true, undefined
    console.log(o[internal.x]); // 100
    console.log(o[internal.y]); // undefined, equ `o["undefined"]`
  }
}

// testcase
let a = new MyClass, b = new MyClass;
console.log(a.compare(b)); // true
console.log(MyClass.compare(a, b)); // true
console.log([a.x, b.x]); // 100, 100

b.x = 500; // update
console.log(a.compare(b)); // false
console.log(MyClass.compare(a, b)); // false
console.log([a.x, b.x]); // 100, 500

// check
MyClass.check(a);
