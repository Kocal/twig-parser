interface Bar {
  bar: string
}

class Foo implements Bar {
  bar: string;

  static foo() {
    console.log('Foo');
  }
}

const foo = new Foo();
console.log(`Hello ${foo.bar}`);
Foo.foo();
