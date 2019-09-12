class MyClass {
	private x = 100;
	public as x;

	check() {
		console.log(x);
	}
}

let a = new MyClass;

console.log(a.x); // 100

a.x = 200;
console.log(a.x); // 200

a.check(); // 200