class MyClass {
  private ["x"] = 100;
  foo() {
    return x;
  }
}

console.log((new MyClass).foo()); // 100
