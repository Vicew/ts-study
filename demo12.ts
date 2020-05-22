// interface Item {
//     name: string
// }

// class DataManager<T> {
//     constructor(private data: T[]) {
//     }
//
//     getItem(index: number): T {
//         return this.data[index];
//     }
// }

// class DataManager<T extends number | string> {
//     constructor(private data: T[]) {
//     }
//
//     getItem(index: number): T {
//         return this.data[index];
//     }
// }

// const data = new DataManager([{name: 'oa'}]);


function hello<T>(params: T) {
    return params;
}

const func: <T>(param: T) => T = hello;
