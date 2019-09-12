var get = 'global'

class MyClass {
  private x = 1
  foo2() {
    return x
  }

  private get
  ; foo() {
    return [this.foo2(), get]
  }
}

console.log((new MyClass).foo()); // 1,undefined
