class MyClass {
	protected x = 100;
	foo() {
		console.log(x);
	}

	protected static x = 200;
	static foo() {
		console.log(x);
	}
}

class MyClassEx extends MyClass {
	foo() {
		console.log(x);
	}

	static foo() {
		console.log(x);
	}
}


(new MyClassEx).foo(); // 100
MyClassEx.foo(); // 200