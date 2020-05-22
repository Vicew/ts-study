// 泛型 generic 泛指的类型
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

// T[]和Array<T>等价
function map<T>(params: Array<T>) {
    return params;
}

function anotherJoin<T>(first: T, second: T): T {
    return second;
}

join<number, string>(1, '1');
map<string>(['123']);
