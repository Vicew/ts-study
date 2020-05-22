// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过@符号来使用
// function testDecorator(flag: boolean) {
//     if (flag) {
//         return function (constructor: any) {
//             constructor.prototype.getName = () => {
//                 console.log('dia');
//             }
//         }
//     } else {
//         return function (constructor: any) {
//         }
//     }
// }
//
// function testDecorator1(constructor: any) {
//     console.log('decorator1');
// }
//
// @testDecorator(true)
// @testDecorator1
// class Test {
// }
//
// const test = new Test();
// (test as any).getName();
