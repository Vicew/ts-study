// interface Person {
//   // readonly name: string;
//   name: string;
//   age?: number;
//   [propName: string]: any;
//   // say(): string;
// }

// interface Teacher extends Person {
//   teach(): string;
// }

// interface SayHi {
//   // 定义函数类型
//   (word: string): string;
// }

// type Person1 = string // 类型别名能直接代替类型，如果能用接口表示就用接口表示

// const getPersonName = (person: Person) => {
//   console.log(person.name);
// };

// const setPersonName = (person: Person, name: string) => {
//   person.name = name;
// };

// const person = {
//   name: "dell",
//   sex: "male",
//   say() {
//     return "say hello";
//   }
// };

// getPersonName({
//   name: "dell",
//   sex: "male",
//   say() {
//     return "say hello";
//   }
// }); // 字面亮形式传进去ts会强校验 变量就不会

// getPersonName(person);
// setPersonName(person, "lee");

// class User implements Person {
//   name = "dell";
//   say() {
//     return "hello";
//   }
// }

// const say: SayHi = (word: string) => {
//   return word;
// };
