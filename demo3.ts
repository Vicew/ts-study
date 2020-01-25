// 基础类型,boolean,number,string,void,undfined,symbol,null
let count; // 无法推断 所以是any
count = 123;

// 对象类型，{},Class, function , []

const func = (str: string) => {
  return parseInt(str, 10); // parseInt能类型推断 返回不需要写number
};

const func1: (str: string) => number = str => {
  return parseInt(str, 10);
};

const date = new Date();

// 其他的 case
// interface Person {
//   name: string;
// }
const rawData = '{"name":"dell"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = "456";
