interface Bird {
    fly: boolean;
    sing: () => {}
}

interface Dog {
    fly: boolean;
    dark: () => {}
}

// 类型断言的方式
function trainAnial(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).dark();
    }
}

// in语法来进行类型保护
function trainAnialSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.dark();
    }
}

// typeof 语法来做类型保护
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
    }
    return first + second;
}

// 使用instanceof来做类型保护
class NumberObj {
    count: number = 0;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
