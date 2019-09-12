class MyClass {
	public x = 100;
}

// public property
console.log((new MyClass).x); // 100

// host on prototype
console.log(Object.getOwnPropertyDescriptor(MyClass.prototype, 'x').value); // 100

// normal features
let a = new MyClass;
console.log(a.x); // 100
MyClass.prototype.x = 200;
console.log(a.x); // 200