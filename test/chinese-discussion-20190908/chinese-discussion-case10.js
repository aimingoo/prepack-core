class MyClass {
	// for instance
	private count = 100;
	foo() {
		console.log(count);
	}

	// for class
	private static count = 100;
	static foo() {
		console.log(count);
	}
}

class MyClassEx extends MyClass {
	foo2() {
		super.foo(); // 100
		this.foo(); // 100
	}

	static foo2() {
		super.foo(); // 100
		this.foo(); // 100
	}
}

(new MyClassEx).foo2();
MyClassEx.foo2();