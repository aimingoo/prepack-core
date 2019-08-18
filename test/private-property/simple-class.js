class MyClass {
	private x = 100;
	foo() {
		console.log(x);
	}

	private static x = 200;
	static foo() {
		console.log(x);
	}
}

(new MyClass).foo(); // 100
MyClass.foo(); // 200