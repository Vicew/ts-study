// getter  setter
// class PersonB {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     const realName = name.split(" ")[0];
//     this._name = realName;
//   }
// }
// const personB = new PersonB("dell");
// // console.log(personB.name);
// personB.name = "dell lee";
// console.log(personB.name);

// 单例模式
// class Demo {
//   private static instance: Demo;
//   private constructor(public name: string) {}
//   static getInstance() {
//     // 不是挂在实例上，是直接挂在在类上
//     if (!this.instance) {
//       this.instance = new Demo("pxd");
//     }
//     return this.instance;
//   }
// }

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1.name);
// console.log(demo2.name);

// class PersonC {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const personC = new PersonC("dell");
// console.log(personC.name);

// abstract class Geom {
//   // 抽象类只能被继承,把共用的抽象出来
//   getType() {
//     return "Gemo";
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }
// class Square {}
// class Triangle {}

// interface PersonDD {
//   name: string;
// }

// interface TeachterDD extends PersonDD {
//   teacherAge: number;
// }
// interface StudentDD extends PersonDD {
//   age: number;
// }

// const teachterDD = {
//   name: "pxd",
//   teacherAge: 44
// };

// const studentDD = {
//   name: "dxp",
//   age: 21
// };

// const getUserInfo = (user: PersonDD) => {
//   console.log(user.teacherAge);
// };

// getUserInfo(teachterDD);
