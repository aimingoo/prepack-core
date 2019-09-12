// super class muted
class MyClass {
  get x() { console.log("DING") }
  set x(v) { console.log("DONG") }
}

class MyClassEx extends MyClass {
  public x = 100; 
}

console.log((new MyClassEx).x); // 100
