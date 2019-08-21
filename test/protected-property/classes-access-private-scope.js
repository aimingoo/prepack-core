// class design based

class InternalMyClass {
  protected hashCode = 100;

  static compare(a, b) {
    let getter = MyClassHelper.prototype.getHashCode;
    return getter.call(a) === getter.call(b);
  }
}

// access protected scope in child-class
class MyClassHelper extends InternalMyClass {
  getHashCode() {  // this.getHashCode()
    return hashCode;  // return private hashCode
  }
}

// publish the class only
class MyClass extends InternalMyClass {
  // private as hashCode; // update or not
  set hash(x) {
    hashCode = x;
  }
  get hash() {
    return hashCode;
  }
}


let a = new MyClass, b = new MyClass;
console.log("Values: ", [a.hash, b.hash]);
console.log("Check: ", MyClass.compare(a,b));

a.hash = 200;
console.log("Values: ", [a.hash, b.hash]);
console.log("Check: ", MyClass.compare(a,b));

