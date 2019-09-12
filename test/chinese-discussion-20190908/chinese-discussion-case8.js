class MyClass {
	private count = 100;
	foo() {
		console.log(count);
	}
}

(new MyClass).foo(); // 100
(new Proxy(new MyClass, {})).foo(); // return undefined for hijack