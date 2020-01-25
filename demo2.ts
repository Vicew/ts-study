// function add(first: number, second: number): number {
//   return first + second;
// }

// const total = add(1, 2);

// function sayHello(): void {
//   console.log("hello");
// }

// function errorEmitter(): never {
//   throw new Error();
//   console.log("123");
// }

// function errorEmitter2(): never {
//   while(true){}
// }

// 解构

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total = add({ first: 1, second: 2 });
