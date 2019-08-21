class MyClass {
	protected x = 100;

	protected static x = 200;
	static foo() {
		console.log(x);
	}
}

class MyClassEx extends MyClass {
	constructor() {
		super();
		console.log(x);
	}
}

// in constructor
new MyClassEx; // 100

// inherited
MyClassEx.foo(); // 200