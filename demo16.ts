// function nameDecorator(target: any, key: string):any {
//     const descriptor: PropertyDescriptor = {
//         writable: false
//     };
//     return descriptor
// }

// 修改的并不是实例上的name，而是原型上的name
function nameDecorator(target: any, key: string) {
    target[key] = 'lee'
}

// name放在实例上
class Test16 {
    @nameDecorator
    name = 'Dell'
}

const test16 = new Test16();
test.name = 'pan'
console.log(test.name)
