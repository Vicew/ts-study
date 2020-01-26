// private protected public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

// class PersonA {
//   public name: string;  // 为何会报错呢？？
//   public sayHi() {
//     this.name; // public内部调用没问题
//     console.log("hi");
//   }
// }
// const personA = new PersonA();
// personA.name = "dell";
// console.log(personA.name);

// class PersonA {
//   // public name: string;
//   constructor(public name: string) { // 加了public就代表注释的两句
//     // this.name = name;
//   }
// }

// const personA = new PersonA("dell");
// console.log(personA.name);

class PersonA {
  constructor(public name: string) {}
}

class TeacherA extends PersonA {
  constructor(public age: number) {
    super("dell");
  }
}

const teacherA = new TeacherA(28);
