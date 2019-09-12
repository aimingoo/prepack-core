class MyClass {
	protected x = 100;
}

class MyClassEx extends MyClass {
	public x as y;

	check() {
		console.log([x, this.y])
	}
}

let a = new MyClassEx;

console.log(a.y); // 100

a.y = 200;
console.log(a.y); // 200

a.check(); // 200,200