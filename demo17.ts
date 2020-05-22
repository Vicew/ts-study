// 原型 方法名 参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
    console.log(target, method, paramIndex)
}

class Test17 {
    getInfo(name: string, @paramDecorator age: number){
        console.log(name, age)
    }
}

const test17 = new Test17();
test17.getInfo('dell',30)
