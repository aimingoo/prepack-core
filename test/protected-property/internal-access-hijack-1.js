function printInternalProperties(internal, chars='=--') {
  if (!internal) return;
  let entries = Object.entries(Object.getOwnPropertyDescriptors(internal));
  console.log(chars);
  if (entries.length > 0) {
    entries.forEach(([key, value])=>console.log(JSON.stringify({key, value})));
  }
  else {
    console.log("(none)");
  }
  printInternalProperties(Object.getPrototypeOf(internal), chars+'=--');
}

class MyClass {
  private x = 200;  // non internal
  static check(o) {
    printInternalProperties(internal);
  	console.log(o[internal.x])
  }
}

class MyClassFake {
  internal private x = 100;
  static resetInternal() {
    internal = {}; // rewrite invalid
    printInternalProperties(internal);
  }
}

let o = new MyClassFake;
MyClass.check(o);
MyClassFake.resetInternal();