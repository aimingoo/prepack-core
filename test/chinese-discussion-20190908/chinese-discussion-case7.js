class MyClass {
	internal private count = 100;
	foo(that) {
		console.log([this[internal.count], that[internal.count]]);
	}
}

(new MyClass).foo(new Object); // 100, undefined