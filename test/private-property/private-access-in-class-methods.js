const ACCESS_HASHCODE = Symbol(); // any name or symbol
let internal_getter;
class MyClass {
  private hashCode = 100;

  get hashCode() {
    return hashCode;
  }

  set hashCode(v) {
    hashCode = v;
  }

  [ACCESS_HASHCODE]() {  // public at MyClass.prototype
    return hashCode;
  }

  static compare(a, b) {
    return internal_getter.call(a) === internal_getter.call(b);
  }
}

internal_getter = MyClass.prototype[ACCESS_HASHCODE];
delete MyClass.prototype[ACCESS_HASHCODE];

let a = new MyClass, b = new MyClass;
console.log("Values: ", [a.hashCode, b.hashCode]);
console.log("Check: ", MyClass.compare(a, b));

a.hashCode = 200;
console.log("Values: ", [a.hashCode, b.hashCode]);
console.log("Check: ", MyClass.compare(a, b));

