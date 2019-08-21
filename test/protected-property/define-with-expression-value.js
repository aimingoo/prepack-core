class MyClass {
	protected x = 100;
}

class MyClassEx extends MyClass {
	private x2 = x + 100;
	foo() {
		console.log(x2);
	}
}

(new MyClassEx).foo(); // 200