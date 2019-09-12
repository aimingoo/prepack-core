class MyClass {
	public static x = 100;
}

class MyClassEx extends MyClass { }

// public property
console.log(MyClass.x); // 100

// inherited
console.log(MyClassEx.x); // 100

// normal features
MyClass.x = 200;
console.log(MyClassEx.x); // 200