// reflect base on `internal` reference

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

function internalKeys(internal) {
  let keys = [], key;
  for (key in internal) keys.push(key);
  return keys;
}

class MyClass {
  internal private x = 100;
  internal protected y = 200;
}

class MyClassEx extends MyClass {
  private x = 100;  // non internal
  internal protected z = 100;

  static reflect() {
    console.log("Internal tree:");
  	printInternalProperties(internal);
  }

  static reflect2() {
    console.log("\nInternal keys:");
    console.log(internalKeys(internal));
  }
}

MyClassEx.reflect();
MyClassEx.reflect2();