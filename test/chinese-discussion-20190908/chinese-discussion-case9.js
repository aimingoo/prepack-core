class MyClass {
	private count = 100;
	foo() {
		console.log(count);
	}
}

Object.create(new MyClass).foo(); // undefined