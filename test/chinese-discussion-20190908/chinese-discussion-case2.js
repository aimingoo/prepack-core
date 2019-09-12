var x = 100;
var y = 'no implement';

class MyClass {
  protected y = 200;
}

class MyClassEx extends MyClass {
  private x = x; // global-x
  private y = y; // or protected-y
  foo() {
    console.log([x, y]);
  }
}

(new MyClassEx).foo(); // 100, 200
