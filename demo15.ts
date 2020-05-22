// 普通方法， target 对应的是类的 prototype
// 静态方法, target 对应的是类的构造函数

function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
}

class Test15 {
    private _name: string;

    constructor(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }
    @visitDecorator
    set name(name:string) {
        this._name = name
    }
}

const test152 = new Test15('dell');
test.name = 'dell lee'
console.log(test.name)
