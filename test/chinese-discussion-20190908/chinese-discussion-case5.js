// for class in `private property` proposal
class MyClass {
	private static count = 0;

	static get count() {
		return count;
	}
	static set count(v) {
		count = v;
	}
}
class MyClassEx extends MyClass {}

MyClass.count++; // update parent class
MyClassEx.count++; // update child class
console.log([MyClass.count, MyClassEx.count]);  // 1, 2

// for normal class
class ClassA {}
class ClassB extends ClassA {}
ClassA.count = 0;

ClassA.count++; // update parent class
ClassB.count++; // update child class
console.log([ClassA.count, ClassB.count]);  // 1, 2
